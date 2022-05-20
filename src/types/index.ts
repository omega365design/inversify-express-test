export interface TemplateGenerator {
  getHtml(name: string): Promise<string>
}