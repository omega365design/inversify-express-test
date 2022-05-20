import { TemplateGenerator } from "../types";
import { injectable } from "inversify";
import app from "../main";

@injectable()
class HandlebarsGenerator implements TemplateGenerator {
  public async getHtml(name: string): Promise<string> {
    let html = await new Promise<string>((resolve, reject) =>
      app.render(name, (err: any, html: string) => {
        if (err) {
          reject(err);
          return;
        }
        
        resolve(html);
      })
    );

    return html;
  }
}

export default HandlebarsGenerator;