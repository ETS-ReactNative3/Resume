import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import './footer.css'

function Footer() {
  return (
    <div className="row footer">

      <div className='col-lg-8 col-md-8 col-sm-6 text-center' style={{ textAlign: 'start' }}><br />
        <h5 className="text-white">Get In Touch With Me</h5><br />
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <a href="tel:7506432454" className="details"><PhoneIcon color="action" style={{ fontSize: 35, color: 'white' }} />+91-7506432454</a><br /><br />
            <a href="mailto: bhaveshbellaney@gmail.com" className="details"><MailIcon color="action" style={{ fontSize: 35, color: 'white' }} />bhaveshbellaney@gmail.com</a>
          </div>
          <span className="line"></span>
          <a className="details col-lg-5 col-md-12 col-sm-12"><br></br><HomeIcon color="action" style={{ fontSize: 35, color: 'white' }} />A-14,Satya CHS,Opposit MTNL,S.V.Rd,Kandivali(West),Mumbai-400067</a>
        </div>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-6 pb-3 align-self-center text-center'>
        <br></br>
        <a href="https://www.linkedin.com/in/bhavesh-bellaney-7b8553186">
          <LinkedInIcon color="action" style={{ fontSize: 35, color: 'white' }} />
        </a>
        <a href="https://www.facebook.com/bhavesh.bellaney.31/">
          <FacebookIcon color="action" style={{ fontSize: 35, color: 'white' }} />
        </a><br /><br />
        <a href="https://github.com/Bhavesh56789">
          <GitHubIcon color="action" style={{ fontSize: 35, color: 'white' }} />
        </a>
        <a href="https://www.instagram.com/bhaveshbellaney/">
          <InstagramIcon style={{ fontSize: 35, color: 'white' }} />
        </a>
      </div>
    </div >

  );
}

export default Footer;