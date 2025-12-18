---
title: "Setting up Actix Web in a Tauri App"
date: '2023-05-08'
description: "In this article, we will discuss how to set up an Actix web server with a Tauri application."
keywords: 'Tauri, Rust, Desktop apps, Actix, RESTful API'
category: 'Software Engineering'
---

This was an experience where my company team was trying to create a Rust desktop
app tool for debugging and developing Laravel apps called Krater 
(we later changed to Go 🫣). However, we had an issue trying to connect the 
Laravel apps with the tool and extracting data from them. This was our solution: 
since we needed a way to connect with websites and extract data, we researched 
the best ways to do this and discovered Actix Web.

Actix Web provides a powerful method for handling HTTP requests. By integrating
it with Tauri, we can create desktop apps with advanced web capabilities. We
would like to share our knowledge by providing a basic procedure for setting up
a simple Tauri app with Actix Web.

Firstly, to integrate Actix Web in our Tauri app, we need to install the Actix
Web dependency by adding it to our `Cargo.toml` file in the following way:

```rust
[dependencies]
tauri = { version = "1.2", features = ["shell-open"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
actix-web = "4"
```

Next, we will create the folder structure for our server. Our folder can be set
up within the `src-tauri/src/` folder in the following manner:

```
src-tauri/
	src/
		server/
			mod.rs
			handlers/
				mod.rs
				example.rs
```

The `server/mod.rs` file is the Rust module for our server, while the `handler`
folder is where we can add various endpoints for our API. Let's get started on
coding our server module. Navigate to `server/mod.rs` and create the Actix Web
main method that initializes your server as follows:

```rust
mod handlers;

use std::{sync::Mutex};

use actix_web::{middleware, web, App, HttpServer};
use tauri::AppHandle;

struct TauriAppState {
    app: Mutex<AppHandle>,
}

#[actix_web::main]
pub async fn init(app: AppHandle) -> std::io::Result<()> {
    let tauri_app = web::Data::new(TauriAppState {
        app: Mutex::new(app),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(tauri_app.clone())
            .wrap(middleware::Logger::default())
            .service(handlers::example::handle)
    })
    .bind(("127.0.0.1", 4875))?
    .run()
    .await
}
```

The `mod handlers` statement defines a submodule that includes a module named
`example`. This module is used to handle incoming API requests. Additionally, a
`struct` called `TauriAppState` is defined, which holds an instance of an AppHandle
from the Tauri library. This `AppHandle` is used to facilitate communication
between the Rust web server and the Tauri desktop application it is designed to
work with.

The `init` function is an asynchronous function that sets up and configures the
web server to handle incoming requests. It accepts an `AppHandle` as input, which
is used to create the `TauriAppState` instance. The `tauri_app` variable is created
using the `web::Data` struct, which can be used to store application data that can
be accessed by different parts of the application. In this case, `tauri_app` is an
instance of `TauriAppState`.

The `HttpServer` struct is then instantiated, and the `new` method is used to
create a new instance of an Actix-web `App`. This `App` instance is configured
with several middleware to handle web requests, including the `Logger::default()`
middleware. The `.service()` method is called on the `App` instance, which
includes the `handlers::example::handle` function as an argument. This function
is the request handler that actually processes incoming web requests.

Now, to use our example module in the Actix web server, navigate to
`example.rs` and add the following code:


```rust
use actix_web::{post};

#[post("/api/test")]
pub async fn handle() -> actix_web::Result<String> {
	let text = "hello world";
  println!("{}",text);

  Ok(text.to_string())
}
```

In this code snippet, we are simply printing a "Hello World"  message in the
terminal  to verify that the endpoint is functioning properly.

The next and most critical step is to navigate to the `main.rs` file and add
the server module that we just created, along with a new standard module called
"thread". This module will play an essential role in running the server and
handling incoming requests.

```rust
mod server;

use std::thread;
```
To prevent the interruption of our main Tauri app thread, we will use the thread
module to run our server in a separate thread. This allows us to keep our server
running without interfering with the functionality of our main thread. Finally,
to achieve this, we will chain our main method in the following way:

```rust
fn main() {
    tauri::Builder::default()
        .setup(|app| {

            let handle = app.handle();
            let boxed_handle = Box::new(handle);

            thread::spawn(move || {
                server::init(*boxed_handle).unwrap();
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```
In the main method, we uses the `tauri::Builder` struct to customize our
configure and run the Tauri application. The `setup` method takes a closure
that is executed before initializes the Tauri application. It creates a handle
to the Tauri application using the `app.handle()` method, stores it in a boxed
variable, and passes it to the `server::init` function.

Then, we create a new thread and starts the server using `thread::spawn`and
passes a closure that initializes the Tauri server using the `server::init`
function. The closure captures ownership of the `boxed_handle`variable using
the `move`keyword, which moves the boxed handle into the closure. Finally, the 
`server::init`function takes the boxed handle as a dereferenced pointer
(using the `*`operator) and initializes the Tauri server using it. The `unwrap`
method is used to panic if there is an error during server initialization. If
the closure executed successfully it will returns Ok.

We have completed our demo, and to ensure it's working correctly, we will run
`npm run tauri dev`. This command will launch our application, and we can then
proceed to test it by sending a GET request to our endpoint located at `/api/test`.
If everything is working fine, we should see the "Hello World" message displayed
in our terminal as a response to the request.


I hope you enjoyed reading this post and that it has given you some ideas for
new features to add to your project. 


