#!/usr/bin/env node
/**
 * Telehealth FX - IndexNow Instant Indexing Engine
 * Submits the Top 200 Priority URLs directly to Bing & partner engines.
 *
 * Usage:
 *   node scripts/instant_index_indexnow.mjs [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const HOST = 'telehealthfx.com';
const INDEXNOW_KEY = '9f4c3a7e58b14d2e8b6c0a1f3e7d9b2a';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const batchArg = process.argv.find(a => a.startsWith('--batch='));
const batchNum = batchArg ? batchArg.split('=')[1] : '3';

let PRIORITY_FILE = path.join(projectRoot, 'src', 'data', `priority-200-urls-batch${batchNum}.json`);
if (!fs.existsSync(PRIORITY_FILE)) {
  PRIORITY_FILE = path.join(projectRoot, 'src', 'data', 'priority-200-urls.json');
}

const isDryRun = process.argv.includes('--dry-run');

function getUrlsToIndex() {
  if (fs.existsSync(PRIORITY_FILE)) {
    const raw = fs.readFileSync(PRIORITY_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return parsed.urls.slice(0, 200);
  }
  throw new Error(`Priority file not found at ${PRIORITY_FILE}`);
}

async function main() {
  console.log('='.repeat(70));
  console.log('⚡ TELEHEALTH FX — INDEXNOW INSTANT SUBMISSION ENGINE (TOP 200)');
  console.log('='.repeat(70));

  const urls = getUrlsToIndex();
  console.log(`📌 Loaded EXACTLY ${urls.length} prioritized URLs ready for IndexNow.`);
  console.log(`🔑 Key Location: ${KEY_LOCATION}`);

  if (isDryRun) {
    console.log('\n[DRY RUN MODE] The following URLs would be submitted to IndexNow:');
    urls.forEach((u, i) => console.log(`  ${(i + 1).toString().padStart(3, ' ')}. ${u}`));
    console.log('\n✅ Dry run complete. No API calls made.');
    return;
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const endpoints = [
    'https://www.bing.com/indexnow',
    'https://api.indexnow.org/indexnow',
    'https://yandex.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    console.log(`\n📡 Submitting ${urls.length} URLs to ${endpoint}...`);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 200 || res.status === 202) {
        console.log(`🎉 SUCCESS! (HTTP ${res.status}) at ${new URL(endpoint).hostname}`);
        console.log(`✅ All ${urls.length} URLs successfully submitted to IndexNow!`);
        console.log('Bing, Yandex, Naver, and Seznam will immediately crawl these URLs.');
        break; // Once accepted by one IndexNow endpoint, it automatically propagates to all participating engines
      } else {
        const text = await res.text();
        console.warn(`⚠️ Endpoint ${endpoint} returned HTTP ${res.status}:`, text);
      }
    } catch (err) {
      console.error(`🚨 Network error connecting to ${endpoint}:`, err.message);
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('🏁 IndexNow Submission Finished!');
  console.log('='.repeat(70));
}

main();
