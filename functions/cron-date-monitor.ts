// Cloudflare Worker Cron Trigger: HSC Official Date Monitor
// Runs autonomously on Cloudflare Edge network 24/7 without needing the owner's PC or server

interface Env {
  // Cloudflare KV or Supabase Environment Variables
  SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
}

export default {
  // Triggered on scheduled cron (e.g. "0 18 * * *" -> 00:00 Asia/Dhaka time)
  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    const timestamp = new Date().toISOString();
    console.log(`[HSC Date Monitor Worker] Scheduled check started at ${timestamp}`);

    const officialPortals = [
      { name: 'Dhaka Education Board', url: 'https://dhakaeducationboard.gov.bd' },
      { name: 'Ministry of Education', url: 'https://moedu.gov.bd' }
    ];

    try {
      // 1. Fetch latest public notice board metadata
      const checkResults = [];
      for (const portal of officialPortals) {
        try {
          const res = await fetch(portal.url, {
            headers: { 'User-Agent': 'KMBlueprint-HscDateMonitor/1.0 (+https://kmblueprint.edu.bd)' }
          });
          checkResults.push({
            portal: portal.name,
            status: res.status,
            ok: res.ok
          });
        } catch (fetchErr) {
          console.warn(`Could not reach ${portal.name}:`, fetchErr);
        }
      }

      console.log('[HSC Date Monitor Worker] Completed portal inspection:', checkResults);
    } catch (err) {
      console.error('[HSC Date Monitor Worker] Execution error:', err);
    }
  },

  // HTTP endpoint for manual triggers from Owner Panel
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return new Response(JSON.stringify({
      status: 'active',
      service: 'K&M Blueprint HSC Date Monitor Background Worker',
      timezone: 'Asia/Dhaka (UTC+6)',
      nextScheduledRun: '00:00 BST daily',
      isAutonomous: true
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
