using AdminPageFor4XGame.Server.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using AdminPageFor4XGame.Server.Business;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddSingleton<MongoDbService>();


var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

//builder.Services.AddDefaultIdentity<User>(options => options.SignIn.RequireConfirmedAccount = true)
//    .AddEntityFrameworkStores<ApplicationDbContext>();


builder.Services.AddAuthorization();
builder.Services.AddAuthentication().AddCookie(IdentityConstants.ApplicationScheme);

builder.Services.AddIdentityCore<User>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddApiEndpoints();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder
            .WithOrigins("https://localhost:5173") // Replace with your front-end URL
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
});




//builder.Services.AddIdentity<IdentityUser, IdentityRole>()
//    .AddEntityFrameworkStores<ApplicationDbContext>()
//    .AddDefaultTokenProviders();




// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}



app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.MapIdentityApi<User>();

app.UseCors("AllowSpecificOrigin");
app.UseCors("AllowReactApp");
//app.UseCors("AllowReactApp");
//app.UseCors("AllowSpecificOrigin");

app.MapFallbackToFile("/index.html");

app.Run();
