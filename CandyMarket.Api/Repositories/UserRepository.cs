using CandyMarket.Api.DataModels;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using CandyMarket.Api.Dtos;

namespace CandyMarket.Api.Repositories
{
    public class UserRepository
    {
        string _connectionString = "Server=localhost;Database=candymarket;Trusted_Connection=True";

        public IEnumerable<User> GetUsers()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "select * from [user]";
                var users = db.Query<User>(sql);
                return users;
            }
        }

        public User GetUser(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "select * from [user] where [id] = @id";
                var parameters = new { id };
                var user = db.QueryFirst<User>(sql, parameters);
                return user;
            }
        }

        public User AddUser(AddUserDto newUser)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"insert into [user]
                                ([firstname],
                                [lastname],
                                [username])
                                output inserted.*
                                values
                                (@firstname,
                                @lastname,
                                @username)";

                var user = db.QueryFirst<User>(sql, newUser);
                return user;
            }
        }

        public bool DeleteUser(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "delete from [user] where [id] = @id";
                return db.Execute(sql, new { id }) >= 1;
            }
        }
    }
}
