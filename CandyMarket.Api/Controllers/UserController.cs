using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using CandyMarket.Api.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandyMarket.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return new UserRepository().GetUsers();
        }

        [HttpGet("{userId}")]
        public User GetUser(int userId)
        {
            return new UserRepository().GetUser(userId);
        }

        [HttpPost]
        public User AddUser(AddUserDto newUser)
        {
            return new UserRepository().AddUser(newUser);
        }

        [HttpDelete]
        public bool DeleteUser(int userId)
        {
            return new UserRepository().DeleteUser(userId);
        }
    }
}