declare module "postwoman-api" {
   export default function(
      collection: { [K: string]: any },
      port?: number
   ): void
}
