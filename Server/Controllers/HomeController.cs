using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace Server.Controllers
{
    public class HomeController : ApiController
    {
        // GET: Home
        public class Greet
        {
            public string Name { get; set; }
        }

        public IHttpActionResult getMessage()
        {
            return Ok( new Greet() { Name = "Hello world" } );
        }

    }
}