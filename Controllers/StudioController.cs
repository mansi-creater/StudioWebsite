using StudioWebsite.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudioWebsite.Controllers
{
    public class StudioController : Controller
    {
        SqlConnection con;
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult About()
        {
            return View();
        }        
        public ActionResult Services()
        {
            return View();
        }
        public ActionResult Portfolio()
        {
            return View();
        }
        public ActionResult PortfolioDetails()
        {
            return View();
        }
        public ActionResult Contact()
        {
            return View();
        }

        public string SaveEnquiryRegistration(string Name, string Email, string PhoneNo, string city, string State, string Event, string message, string active_flg) 
        {
            SqlCommand cmd;
            string str;
            DataTable dt = new DataTable();
           
            using (con = Connection.getStudioConnection())
            {
                using (cmd = new SqlCommand("select * from EnquiryRegistration where PhoneNo = '"+ PhoneNo + "'", con))
                {
                    cmd.CommandType = CommandType.Text;                  
                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dt);
                    if (dt.Rows.Count > 0)
                    {
                        using (cmd = new SqlCommand("update EnquiryRegistration set Event = '"+Event+"',message='"+message+ "',crdt=getdate() where PhoneNo ='" + PhoneNo+"'", con))
                        {
                            cmd.CommandType = CommandType.Text;
                            str = cmd.ExecuteNonQuery().ToString();
                        }
                    }
                    else
                    {
                        using (cmd = new SqlCommand("insert into EnquiryRegistration values('" + Name + "','" + Email + "','" + PhoneNo + "','" + city + "','" + State + "','" + Event + "','" + message + "',getdate(),'" + active_flg + "')", con))
                        {
                            cmd.CommandType = CommandType.Text;
                            str = cmd.ExecuteNonQuery().ToString();
                        }
                    }
                }               
                return str;
            }

        }
    }
}
