using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Travis_CI.Startup))]
namespace Travis_CI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
