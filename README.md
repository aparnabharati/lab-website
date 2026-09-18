
  ![on-push](../../actions/workflows/on-push.yaml/badge.svg)
  ![on-pull-request](../../actions/workflows/on-pull-request.yaml/badge.svg)
  ![on-schedule](../../actions/workflows/on-schedule.yaml/badge.svg)

  # SeeVi Lab

  Computer vision for provenance, integrity, and perception.
  Department of Computer Science, Colorado State University.

  Visit **[www.seevi-lab.org](https://www.seevi-lab.org)** 🚀

  _Built with [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs)_

---

## Editing the site

| To change | Edit |
| --- | --- |
| Site title, description, social links | `_config.yaml` |
| Team members | `_members/*.md` — one file per person |
| Publications | `_data/sources.yaml` — add the DOI, CI regenerates `citations.yaml` |
| News items | `_data/news.yaml` |
| Page content | `index.md`, `research/`, `team/`, `contact/` |
| Photos | `images/` |

### Adding a publication

Add the DOI to `_data/sources.yaml`:

```yaml
- id: doi:10.1109/EXAMPLE.2026.1234567
```

The scheduled workflow fetches the metadata and rewrites `_data/citations.yaml`. Never edit `citations.yaml` by hand — it is generated.

### Adding a team member

Copy an existing file in `_members/`, then update the frontmatter. Current members need no `group` field. To move someone to alumni, add:

```yaml
group: alumni
```

Keep portrait photos under ~200 KB and roughly 1000 px on the long edge.

### Hidden pages

`blog/` and `projects/` are built but hidden from the nav for v1. To restore either, uncomment the `nav` block at the top of its `index.md`. Both still contain placeholder content.

### Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.
