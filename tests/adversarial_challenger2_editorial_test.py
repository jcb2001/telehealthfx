
import os, sys, re, unittest
from pathlib import Path
from test_editorial_blueprints import TestEditorialBlueprints

class AdversarialChallenger2Test(TestEditorialBlueprints):
    def test_adv_01_all_35_snippets_word_count_distribution(self):
        counts = {}
        for bp in self.blueprints:
            bp_id = bp["id"]
            snippet = bp["snippet"]
            self.assertIsNotNone(snippet, f"Blueprint {bp_id}: Snippet missing entirely!")
            clean = re.sub(r"^>\s*", "", snippet, flags=re.MULTILINE).strip()
            word_count = len(clean.split())
            counts[bp_id] = word_count
            self.assertTrue(40 <= word_count <= 60, f"Blueprint {bp_id}: snippet length {word_count} is outside [40, 60] bounds.")
        vals = list(counts.values())
        print(f"\n[SNIPPET STATS] Analyzed {len(vals)} snippets: Min={min(vals)}, Max={max(vals)}, Avg={sum(vals)/len(vals):.2f}")
        for bp_id in sorted(counts.keys(), key=lambda x: int(x) if x.isdigit() else 999):
            print(f"  ART-{int(bp_id):02d}: {counts[bp_id]} words")

    def test_adv_02_all_35_cro_bridges_complete_specs(self):
        required_url = "https://go.telehealthfx.com/start"
        affiliate_domains = ["amazon.com", "shareasale.com", "clickbank", "cj.com", "bit.ly", "impact.com"]
        for bp in self.blueprints:
            bp_id = bp["id"]
            cro = bp["cro_bridge"]
            self.assertIsNotNone(cro, f"Blueprint {bp_id}: CRO bridge missing!")
            self.assertIn(required_url, cro, f"Blueprint {bp_id}: Missing direct CTA {required_url}")
            self.assertIn("$146", cro, f"Blueprint {bp_id}: Missing $146 pricing")
            self.assertIn("$258", cro, f"Blueprint {bp_id}: Missing $258 pricing")
            self.assertIn("$79", cro, f"Blueprint {bp_id}: Missing $79 pricing")
            for aff in affiliate_domains:
                self.assertNotIn(aff, cro.lower(), f"Blueprint {bp_id}: Detected affiliate network domain {aff}")

    def test_adv_03_internal_linking_syntax_and_trailing_slashes(self):
        total_internal_links = 0
        for bp in self.blueprints:
            bp_id = bp["id"]
            chunk = bp["raw_chunk"]
            inbound_m = re.search(r"-\s+\*\*Inbound Sources\*\*:\s*(.*?)$", chunk, re.MULTILINE)
            outbound_m = re.search(r"-\s+\*\*Outbound Targets\*\*:\s*(.*?)$", chunk, re.MULTILINE)
            self.assertIsNotNone(inbound_m, f"Blueprint {bp_id}: Inbound Sources missing")
            self.assertIsNotNone(outbound_m, f"Blueprint {bp_id}: Outbound Targets missing")
            in_links = re.findall(r"\(`([^`]+)`\)", inbound_m.group(1))
            out_links = re.findall(r"\(`([^`]+)`\)", outbound_m.group(1))
            self.assertGreater(len(in_links), 0, f"Blueprint {bp_id}: No inbound links parsed")
            self.assertGreater(len(out_links), 0, f"Blueprint {bp_id}: No outbound links parsed")
            for link in in_links + out_links:
                if link.startswith("http"):
                    self.assertEqual(link, "https://go.telehealthfx.com/start", f"Blueprint {bp_id}: unexpected external URL {link}")
                else:
                    total_internal_links += 1
                    self.assertTrue(link.startswith("/"), f"Blueprint {bp_id}: internal link {link} lacks leading slash")
                    self.assertTrue(link.endswith("/"), f"Blueprint {bp_id}: internal link {link} lacks trailing slash")
                    self.assertIsNone(re.search(r"[A-Z\s_]", link), f"Blueprint {bp_id}: invalid characters in internal link {link}")
        print(f"\n[LINKING STATS] Verified {total_internal_links} total internal link instances across 35 blueprints.")

    def test_adv_04_deep_placeholder_and_stub_scan(self):
        forbidden_patterns = [
            r"\bTODO\b", r"\bTBD\b", r"\bLorem\b", r"\[placeholder\]",
            r"\bFIXME\b", r"\bXXX\b", r"\[insert\b", r"\{insert\b",
            r"<insert\b", r"coming soon", r"\basdf\b",
        ]
        matches = []
        for pat in forbidden_patterns:
            found = list(re.finditer(pat, self.content, re.IGNORECASE))
            if found:
                matches.append(f"Pattern {pat}: {len(found)} matches")
        self.assertEqual(len(matches), 0, f"Placeholder artifacts detected: {matches}")

    def test_adv_05_outline_completeness_and_clinical_rigor(self):
        for bp in self.blueprints:
            bp_id = bp["id"]
            chunk = bp["raw_chunk"]
            h2_matches = re.findall(r"-\s+\*\*H2:", chunk)
            h3_matches = re.findall(r"-\s+H3:", chunk)
            self.assertGreaterEqual(len(h2_matches), 4, f"Blueprint {bp_id}: fewer than 4 H2 sections ({len(h2_matches)})")
            self.assertGreaterEqual(len(h3_matches), 8, f"Blueprint {bp_id}: fewer than 8 H3 subsections ({len(h3_matches)})")
            has_clinical = any(term in chunk for term in ["STEP", "SURMOUNT", "503A", "FD&C", "titration", "USP <797>", "pharmacokinetics"])
            self.assertTrue(has_clinical, f"Blueprint {bp_id}: lacking clinical trial or statutory grounding")

    def test_adv_06_url_slug_uniqueness_and_kebab_format(self):
        slugs = [bp["slug"] for bp in self.blueprints]
        self.assertEqual(len(slugs), 35, "Expected 35 slugs")
        self.assertEqual(len(set(slugs)), 35, f"Duplicate slugs detected! {len(slugs)} total vs {len(set(slugs))} unique")
        for bp in self.blueprints:
            slug = bp["slug"]
            self.assertTrue(re.match(r"^/blog/[a-z0-9-]+/$", slug), f"Blueprint {bp["id"]}: slug {slug} does not match ^/blog/[a-z0-9-]+/$")

if __name__ == "__main__":
    unittest.main(verbosity=2)
