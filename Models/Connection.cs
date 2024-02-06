using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace StudioWebsite.Models
{
    public class Connection
    {

        public static SqlConnection getStudioConnection() {
            SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["constr"].ConnectionString);
            if (con.State == ConnectionState.Closed)
                con.Open();
            return con;
        }
    }
}