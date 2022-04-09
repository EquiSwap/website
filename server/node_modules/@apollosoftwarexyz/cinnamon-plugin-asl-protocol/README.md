# cinnamon-plugin-asl-protocol
A Cinnamon plugin that adds convenience methods for Apollo Software's REST
req/res protocol.

## Installation
1. `yarn add @apollosoftwarexyz/cinnamon-plugin-asl-protocol`
2. Update your Cinnamon project's `src/main.ts` to include the plugin in the `load` hook:
  ```ts
  import { ApolloProtocol } from '@apollosoftwarexyz/cinnamon-plugin-asl-protocol';
  
  // ...
  
  await Cinnamon.initialize({
      async load(framework) {
          framework.use(new ApolloProtocol(framework));
      }
  });
  
  // ...
  ```
  
## Usage
You can use the `success`, `successRaw` and `error` methods in your controller routes,
by calling the respective method on the context.

- For a `success` response:
  
  ```ts
  @Route(Method.GET, '/')
  public async index(ctx: Context): Promise<void> {
  
    // ...
    
    return ctx.success({
        message: 'Hello, world!'
    });
  
  }
  ```
  
  This will yield the following JSON response, which would usually be unwrapped on
  the client-side by the complimentary client plugin:
  ```json
  {
    "success": true,
    "payload": {
      "message": "Hello, world!"
    }
  }
  ```

- For a `successRaw` response:
  
  ```ts
  @Route(Method.GET, '/')
  public async index(ctx: Context): Promise<void> {
  
    // ...
    
    // The MIME-type 'text/plain' would be set by default, but is specified here
    // for demonstration purposes.
    return ctx.successRaw("Hello, world!", 'text/plain');
  
  }
  ```
  
  This will yield the following plain-text response:
  ```
  Hello, world!
  ```

- For an `error` response:
  
  ```ts
  @Route(Method.GET, '/')
  public async index(ctx: Context): Promise<void> {
  
    // ...
    
    // Where:
    // - 404 is the HTTP status code,
    // - "ERR_MISSING_ENTITY" is your app-specific error name
    // - "User not found!" is a human-readable message in your product's primary language
    //   that your app can display as a fallback to its local translation based on the
    //   error name.
    return ctx.error(404, "ERR_MISSING_ENTITY", "User not found!");
  
  }
  ```
  
  This will yield the following JSON response:
  ```json
  {
    "success": false,
    "error": "ERR_MISSING_ENTITY",
    "message": "User not found!"
  }
  ```

## License
[MIT License](./LICENSE)
