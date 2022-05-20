export interface TemplateGenerator {
  getHtml(name: string): Promise<string>;
  getHtmlWithLayout(name: string, layout: string): Promise<string>;
}