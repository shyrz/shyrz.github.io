---
title: Aeon - Mermaid
layout: post
date: 2020-02-03
categories:
  - Aeon
tags:
  - mermaid
---
## Flow Chart

<p class="mermaid">
graph TD
	A([Blogger]) --> |Push Commits| B[servant branch]
	B --> |Trigger build| C[CI]
	C --> |Push Output| E[master branch]
	subgraph Repository
	B & E
	end
	E --> F[Netlify/ZEIT]
	F --> G([End User])
<p>

[View](https://mermaid-js.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoiZ3JhcGggTFJcblx0XG5cdEEoW0Jsb2dnZXJdKSAtLT4gfFB1c2ggQ29tbWl0c3wgQltzZXJ2YW50IGJyYW5jaF1cblx0QiAtLT4gfFRyaWdnZXIgYnVpbGR8IENbQ0ldXG5cdEMgLS0-IHxQdXNoIE91dHB1dHwgRVttYXN0ZXIgYnJhbmNoXVxuXHRzdWJncmFwaCBSZXBvc2l0b3J5XG5cdEIgJiBFXG5cdGVuZFxuXHRFIC0tPiBGW05ldGxpZnkvWkVJVF1cblx0RiAtLT4gRyhbRW5kIFVzZXJdKVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJjdXJ2ZSI6ImxpbmVhciJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

## Sequence Diagram

<p class="mermaid">
sequenceDiagram
	Alice->>+John: Hello John, how are you?
	Alice->>+John: John, can you hear me?
	John-->>-Alice: Hi Alice, I can hear you!
	John-->>-Alice: I feel great!
<p>
