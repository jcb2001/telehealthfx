#!/usr/bin/env node

/**
 * Root proxy runner for Telehealth FX GEO, Canonical & Schema E2E Test Suite
 * Forwards execution to Telehealth FX Site/tests/verify-geo-canonical-schema.js
 */

const path = require('path');
const targetScript = path.resolve(__dirname, '..', 'Telehealth FX Site', 'tests', 'verify-geo-canonical-schema.js');
require(targetScript);
