import { Mail, MapPin, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ieee-blue text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* IEEE Branch Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-ieee-blue font-bold text-lg">IEEE</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">IEEE Student Branch</h3>
                <p className="text-sm opacity-90">SMVITM</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Advancing technology for humanity through student innovation, research, and professional development.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 opacity-80" />
                <span className="text-sm">Shri Madhwa Vadiraja Institute of Technology & Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm">ieee@smvitm.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 opacity-80" />
                <span className="text-sm">www.ieee-smvitm.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</a>
              <a href="/team" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Our Team</a>
              <a href="/achievements" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Achievements</a>
              <a href="/publications" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Publications</a>
              <a href="/societies" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Societies</a>
              <a href="/events" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Events</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 IEEE Student Branch SMVITM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;