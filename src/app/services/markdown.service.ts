import * from marked;

import { Injectable } from 'angular2/core';

interface IMarkdownConfig {
    sanitize?: boolean, // '?' mean optional
    gfm?: boolean,
    breaks?: boolean,
    smartypants?: boolean
}

@Injectable()
export class Markdown {
  private md: MarkedStatic;

  constructor() {
    this.md = marked;
  }

  convert(markdown: string): string {
    if(!markdown) {
      return '';
    }
    return this.md.parse(markdown);
  }

  setConfig(config: IMarkdownConfig) {
    this.md = marked.setOptions(config);
  }
}