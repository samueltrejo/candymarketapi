using System;
using System.Collections.Generic;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using System.Data.SqlClient;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
    {
        string _connectionString = "Server=localhost;Database=candymarket;Trusted_Connection=True";

        public IEnumerable<Candy> GetAllCandy()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "select * from candy";
                var candy = db.Query<Candy>(sql);
                return candy;
            }
        }

        public Candy AddCandy(AddCandyDto newCandy)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"insert into [candy]
                                ([name])
                                output inserted.*
                                values
                                (@name)";

                var candy = db.QueryFirst<Candy>(sql, newCandy);
                return candy;
            }
        }

        public bool EatCandy(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "delete from candy where [id] = @id";
                return db.Execute(sql, new { id }) >= 1;
            }
        }
    }
}