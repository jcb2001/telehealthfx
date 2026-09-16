#!/usr/bin/env python3
"""
Automated Programmatic Test Suite: Telehealth FX SEO & CRO Editorial Roadmap & Blueprints
Validates structural integrity, metadata physical constraints, 100% keyword mapping coverage,
direct CRO conversion bridges, and commercial pricing models ($146, $258, $79).

Runtime: Python 3 standard library unittest (no external pip dependencies).
Execution: python3 tests/test_editorial_blueprints.py
"""

import os
import re
import sys
import unittest
from pathlib import Path


class TestEditorialBlueprints(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Resolve repository root
        cls.test_dir = Path(__file__).resolve().parent
        cls.project_root = cls.test_dir.parent

        # Locate candidate master deliverables
        candidate_paths = [
            cls.project_root / "SEO_CRO_Editorial_Roadmap_Blueprints.md",
            cls.project_root / "Telehealth FX Site" / "docs" / "SEO_CRO_Editorial_Roadmap_Blueprints.md",
        ]
        if len(sys.argv) > 1 and sys.argv[1].endswith(".md"):
            candidate_paths.insert(0, Path(sys.argv[1]).resolve())

        cls.doc_path = None
        for p in candidate_paths:
            if p.exists():
                cls.doc_path = p
                break

        if not cls.doc_path:
            raise FileNotFoundError(
                f"Master deliverable not found. Checked candidate paths: {[str(p) for p in candidate_paths]}"
            )

        with open(cls.doc_path, "r", encoding="utf-8") as f:
            cls.content = f.read()

        # Load authoritative source keywords
        cls.keywords_path = cls.project_root / "Marketing" / "Telehealth FX Keywords.txt"
        if not cls.keywords_path.exists():
            raise FileNotFoundError(f"Missing source keywords file: {cls.keywords_path}")

        with open(cls.keywords_path, "r", encoding="utf-8") as f:
            cls.raw_keywords = [line.strip().lower() for line in f if line.strip()]

        cls.unique_source_keywords = set(cls.raw_keywords)

        # Parse blueprints
        cls.blueprints = cls._parse_blueprints(cls.content)

    @classmethod
    def _parse_blueprints(cls, markdown_text):
        """
        Parses all article blueprint blocks from the master markdown document.
        Supports:
        ### Blueprint ART-01: ...
        ### Blueprint 01: ...
        ### Article Blueprint ART-01: ...
        """
        blueprint_pattern = re.compile(
            r"^###\s+(?:Article\s+)?Blueprint\s+(?:ART-)?(\d+|[A-Za-z0-9_-]+):?\s*(.*?)$",
            re.MULTILINE,
        )
        matches = list(blueprint_pattern.finditer(markdown_text))
        blueprints = []

        for i, match in enumerate(matches):
            start_pos = match.start()
            end_pos = matches[i + 1].start() if i + 1 < len(matches) else len(markdown_text)
            chunk = markdown_text[start_pos:end_pos]
            bp_id = match.group(1).strip()
            bp_title = match.group(2).strip()

            title_tag_match = re.search(
                r"\*\*(?:Title Tag|SEO Title)\*\*:\s*[`\"]?(.*?)[`\"]?$",
                chunk,
                re.MULTILINE,
            )
            meta_desc_match = re.search(
                r"\*\*(?:Meta Description)\*\*:\s*[`\"]?(.*?)[`\"]?$",
                chunk,
                re.MULTILINE,
            )
            slug_match = re.search(
                r"\*\*(?:Proposed URL Slug|URL Slug)\*\*:\s*[`\"]?(.*?)[`\"]?$",
                chunk,
                re.MULTILINE,
            )
            snippet_match = re.search(
                r"\*\*Direct-Answer(?: Featured)? Snippet\*\*.*?:(?:\s*\n>\s*|\s*)(.*?)(?=\n-|\n##|\Z)",
                chunk,
                re.DOTALL,
            )
            primary_kw_match = re.search(
                r"\*\*(?:Target Primary Keyword|Primary Keyword)\*\*:\s*[`\"]?(.*?)[`\"]?$",
                chunk,
                re.MULTILINE,
            )
            secondary_kw_match = re.search(
                r"\*\*(?:Secondary Keywords?|Keyword Cluster)\*\*:\s*[`\"]?(.*?)[`\"]?$",
                chunk,
                re.MULTILINE,
            )
            cro_match = re.search(
                r"\*\*(?:CRO Bridge Mechanism|CRO Bridge)\*\*:\s*[`\"]?(.*?)[`\"]?$",
                chunk,
                re.MULTILINE,
            )
            linking_match = re.search(
                r"\*\*(?:Internal Linking Strategy|Internal Linking)\*\*:",
                chunk,
                re.MULTILINE,
            )

            blueprints.append({
                "id": bp_id,
                "header_title": bp_title,
                "raw_chunk": chunk,
                "title_tag": title_tag_match.group(1).strip("`\" ") if title_tag_match else None,
                "meta_description": meta_desc_match.group(1).strip("`\" ") if meta_desc_match else None,
                "slug": slug_match.group(1).strip("`\" ") if slug_match else None,
                "snippet": snippet_match.group(1).strip() if snippet_match else None,
                "primary_keyword": primary_kw_match.group(1).strip("`\" ").lower() if primary_kw_match else None,
                "secondary_keywords": secondary_kw_match.group(1).strip("`\" ") if secondary_kw_match else "",
                "cro_bridge": cro_match.group(1).strip("`\" ") if cro_match else None,
                "has_linking": bool(linking_match),
            })

        return blueprints

    def test_01_deliverable_file_exists(self):
        """Deliverable markdown file exists and has substantial content (>20KB)."""
        self.assertIsNotNone(self.doc_path, "Master deliverable file not found.")
        file_size = self.doc_path.stat().st_size
        self.assertGreater(
            file_size, 20000, f"Deliverable file size ({file_size} bytes) is suspiciously small."
        )

    def test_02_minimum_blueprint_count(self):
        """Verify at least 30 distinct article blueprints are parsed (specifically 35)."""
        count = len(self.blueprints)
        self.assertGreaterEqual(
            count,
            30,
            f"Expected at least 30 article blueprints, but only parsed {count}.",
        )
        self.assertEqual(
            count,
            35,
            f"Expected exactly 35 article blueprints for full coverage, but found {count}.",
        )

    def test_03_title_tag_strict_lengths(self):
        """Check that EVERY title tag is STRICTLY between 50 and 60 characters inclusive."""
        failures = []
        for bp in self.blueprints:
            title = bp["title_tag"]
            bp_id = bp["id"]
            if not title:
                failures.append(f"Blueprint {bp_id}: Title Tag is missing.")
                continue
            length = len(title)
            if length < 50 or length > 60:
                failures.append(
                    f"Blueprint {bp_id}: Title length {length} out of bounds [50, 60]. "
                    f"Title: '{title}'"
                )

        if failures:
            self.fail(
                f"Title tag character constraint violations ({len(failures)}):\n"
                + "\n".join(failures)
            )

    def test_04_meta_description_strict_lengths(self):
        """Check that EVERY meta description is STRICTLY between 145 and 160 characters inclusive."""
        failures = []
        for bp in self.blueprints:
            desc = bp["meta_description"]
            bp_id = bp["id"]
            if not desc:
                failures.append(f"Blueprint {bp_id}: Meta description is missing.")
                continue
            length = len(desc)
            if length < 145 or length > 160:
                failures.append(
                    f"Blueprint {bp_id}: Meta description length {length} out of bounds [145, 160]. "
                    f"Content: '{desc}'"
                )

        if failures:
            self.fail(
                f"Meta description character constraint violations ({len(failures)}):\n"
                + "\n".join(failures)
            )

    def test_05_url_slug_conventions(self):
        """Verify URL slugs begin with /blog/ and follow clean lowercase kebab-case."""
        failures = []
        for bp in self.blueprints:
            slug = bp["slug"]
            bp_id = bp["id"]
            if not slug:
                failures.append(f"Blueprint {bp_id}: URL Slug is missing.")
                continue
            if not slug.startswith("/blog/"):
                failures.append(f"Blueprint {bp_id}: Slug '{slug}' must start with '/blog/'.")
            if re.search(r"[A-Z\s_]", slug):
                failures.append(f"Blueprint {bp_id}: Slug '{slug}' contains uppercase, spaces, or underscores.")

        if failures:
            self.fail(f"URL slug format violations ({len(failures)}):\n" + "\n".join(failures))

    def test_06_featured_snippet_word_counts(self):
        """Verify Direct-Answer Snippets are strictly between 40 and 60 words inclusive."""
        failures = []
        for bp in self.blueprints:
            snippet = bp["snippet"]
            bp_id = bp["id"]
            if not snippet:
                failures.append(f"Blueprint {bp_id}: Featured snippet block missing.")
                continue
            clean_snippet = re.sub(r"^>\s*", "", snippet, flags=re.MULTILINE).strip()
            word_count = len(clean_snippet.split())
            if word_count < 40 or word_count > 60:
                failures.append(
                    f"Blueprint {bp_id}: Snippet word count {word_count} out of bounds [40, 60]."
                )

        if failures:
            self.fail(f"Featured snippet word count violations ({len(failures)}):\n" + "\n".join(failures))

    def test_07_cro_bridges_and_intake_routing(self):
        """Verify all blueprints contain an explicit CRO bridge mechanism routing to intake funnels."""
        failures = []
        for bp in self.blueprints:
            cro = bp["cro_bridge"]
            bp_id = bp["id"]
            if not cro:
                failures.append(f"Blueprint {bp_id}: CRO Bridge Mechanism is missing.")
                continue
            if "https://go.telehealthfx.com/start" not in cro and "telehealthfx.com" not in cro:
                failures.append(f"Blueprint {bp_id}: CRO Bridge lacks intake funnel link.")

        if failures:
            self.fail(f"CRO bridge omissions ({len(failures)}):\n" + "\n".join(failures))

    def test_08_internal_linking_strategy(self):
        """Verify all blueprints define inbound and outbound internal linking strategies."""
        failures = []
        for bp in self.blueprints:
            bp_id = bp["id"]
            if not bp["has_linking"]:
                failures.append(f"Blueprint {bp_id}: Internal Linking Strategy section missing.")

        if failures:
            self.fail(f"Internal linking omissions ({len(failures)}):\n" + "\n".join(failures))

    def test_09_keyword_mapping_completeness(self):
        """
        Verify that 100% of keywords in Marketing/Telehealth FX Keywords.txt (499 unique across 500 lines)
        are explicitly mapped in the deliverable document.
        """
        doc_lower = self.content.lower()

        missing_keywords = []
        for kw in self.unique_source_keywords:
            if kw not in doc_lower:
                missing_keywords.append(kw)

        if missing_keywords:
            self.fail(
                f"Incomplete keyword coverage: {len(missing_keywords)} of {len(self.unique_source_keywords)} "
                f"keywords missing from deliverable!\nMissing sample: {missing_keywords[:20]}"
            )

    def test_10_phased_rollout_roadmap(self):
        """Verify that the deliverable contains a 3-tier phased commercial rollout schedule."""
        self.assertRegex(
            self.content,
            r"Phase 1.*?(?:Immediate Cash-Pay|Cash-Pay)",
            "Missing Phase 1 (Immediate Cash-Pay) rollout section.",
        )
        self.assertRegex(
            self.content,
            r"Phase 2.*?(?:Authority|Comparison|Ro/Hims)",
            "Missing Phase 2 (Authority & Comparison) rollout section.",
        )
        self.assertRegex(
            self.content,
            r"Phase 3.*?(?:Long-Tail|Capture|Dosage|Maintenance)",
            "Missing Phase 3 (Long-Tail Capture) rollout section.",
        )

    def test_11_pricing_model_verification(self):
        """Verify that commercial pricing models ($99, $190, $214, $149, $199, $79) are explicitly documented."""
        self.assertIn(
            "$99",
            self.content,
            "Missing $99/mo first month promotional price anchor in deliverable.",
        )
        self.assertIn(
            "$190",
            self.content,
            "Missing $190/mo Semaglutide renewal price anchor in deliverable.",
        )
        self.assertIn(
            "$214",
            self.content,
            "Missing $214/mo Tirzepatide renewal price anchor in deliverable.",
        )
        self.assertIn(
            "$149",
            self.content,
            "Missing $149/mo Semaglutide tablet promo price anchor in deliverable.",
        )
        self.assertIn(
            "$199",
            self.content,
            "Missing $199/mo Tirzepatide tablet promo price anchor in deliverable.",
        )
        self.assertIn(
            "$79",
            self.content,
            "Missing $79/mo Testosterone Replacement Therapy price anchor in deliverable.",
        )


def main():
    print("=" * 80)
    print("TELEHEALTH FX — EDITORIAL BLUEPRINTS AUTOMATED PROGRAMMATIC TEST HARNESS")
    print("=" * 80)

    suite = unittest.TestLoader().loadTestsFromTestCase(TestEditorialBlueprints)
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)

    print("\n" + "=" * 80)
    if result.wasSuccessful():
        print(f"✅ ALL {result.testsRun} BLUEPRINT VALIDATION TESTS PASSED (EXIT CODE 0)")
        print("=" * 80)
        sys.exit(0)
    else:
        print(f"❌ BLUEPRINT VALIDATION FAILED: {len(result.failures)} Failures, {len(result.errors)} Errors")
        print("=" * 80)
        sys.exit(1)


if __name__ == "__main__":
    main()
