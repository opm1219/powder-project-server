import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import * as XLSX from 'xlsx';

const AdminPanel = ({ isOpen, setIsOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [activeTab, setActiveTab] = useState('pledges');
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ email: '', password: '' });
  const [pledgeCount, setPledgeCount] = useState('');
  const [customCount, setCustomCount] = useState('');

  useEffect(() => {
    // Load admins and pledge count from localStorage
    const savedAdmins = JSON.parse(localStorage.getItem('admins') || '[]');
    const savedCount = localStorage.getItem('pledgeCount') || '12547';
    setAdmins(savedAdmins);
    setPledgeCount(savedCount);
  }, []);

  const handleLogin = () => {
    if (credentials.username === 'owner' && credentials.password === 'owner123') {
      setIsOwner(true);
      setIsLoggedIn(true);
      toast({
        title: "Welcome Owner",
        description: "You have full access to all features.",
      });
    } else {
      // Check if admin exists
      const admin = admins.find(a => a.email === credentials.username && a.password === credentials.password);
      if (admin) {
        setIsLoggedIn(true);
        toast({
          title: "Welcome Admin",
          description: "You have access to admin features.",
        });
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleAddAdmin = () => {
    if (!newAdmin.email.endsWith('@powderproject.org')) {
      toast({
        title: "Invalid Email",
        description: "Admin email must be a @powderproject.org address.",
        variant: "destructive",
      });
      return;
    }

    if (newAdmin.password.length < 8) {
      toast({
        title: "Invalid Password",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }

    const updatedAdmins = [...admins, newAdmin];
    setAdmins(updatedAdmins);
    localStorage.setItem('admins', JSON.stringify(updatedAdmins));
    
    toast({
      title: "Admin Added",
      description: `${newAdmin.email} has been added as an admin.`,
    });
    
    setNewAdmin({ email: '', password: '' });
  };

  const handleRemoveAdmin = (email) => {
    const updatedAdmins = admins.filter(admin => admin.email !== email);
    setAdmins(updatedAdmins);
    localStorage.setItem('admins', JSON.stringify(updatedAdmins));
    
    toast({
      title: "Admin Removed",
      description: `${email} has been removed from admins.`,
    });
  };

  const handleUpdatePledgeCount = () => {
    if (customCount && !isNaN(customCount)) {
      localStorage.setItem('pledgeCount', customCount);
      setPledgeCount(customCount);
      toast({
        title: "Pledge Count Updated",
        description: `Pledge count has been set to ${customCount}.`,
      });
    } else {
      toast({
        title: "Invalid Count",
        description: "Please enter a valid number.",
        variant: "destructive",
      });
    }
  };

  const handleResetPledgeCount = () => {
    const defaultCount = '12547';
    localStorage.setItem('pledgeCount', defaultCount);
    setPledgeCount(defaultCount);
    setCustomCount('');
    toast({
      title: "Pledge Count Reset",
      description: "Pledge count has been reset to default.",
    });
  };

  const handleExportPledges = () => {
    try {
      const pledges = JSON.parse(localStorage.getItem('pledges') || '[]');
      
      // Add additional data
      const enrichedPledges = pledges.map(pledge => ({
        ...pledge,
        timestamp: new Date(pledge.timestamp).toLocaleString(),
        pledgeCount: pledgeCount,
      }));

      const ws = XLSX.utils.json_to_sheet(enrichedPledges);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Pledges");
      XLSX.writeFile(wb, "powder-project-pledges.xlsx");
      
      toast({
        title: "Export Successful",
        description: "Pledges have been exported to Excel.",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "There was an error exporting the data.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        >
          <div className="container max-w-2xl mx-auto h-screen p-4 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-lg p-6 w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {!isLoggedIn ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-3 py-2 bg-white/10 rounded-lg text-white"
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 bg-white/10 rounded-lg text-white"
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  />
                  <Button
                    className="w-full"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Tabs */}
                  <div className="flex space-x-4 border-b border-white/10">
                    <button
                      className={`px-4 py-2 ${activeTab === 'pledges' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/60'}`}
                      onClick={() => setActiveTab('pledges')}
                    >
                      Pledges
                    </button>
                    <button
                      className={`px-4 py-2 ${activeTab === 'contacts' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/60'}`}
                      onClick={() => setActiveTab('contacts')}
                    >
                      Contacts
                    </button>
                    {isOwner && (
                      <button
                        className={`px-4 py-2 ${activeTab === 'admins' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/60'}`}
                        onClick={() => setActiveTab('admins')}
                      >
                        Manage Admins
                      </button>
                    )}
                  </div>

                  {/* Pledges Tab */}
                  {activeTab === 'pledges' && (
                    <div className="space-y-4">
                      {/* Pledge Count Management */}
                      <div className="bg-white/10 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Manage Pledge Count</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-white">Current Count:</span>
                            <span className="text-blue-400 font-bold">{pledgeCount}</span>
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="number"
                              value={customCount}
                              onChange={(e) => setCustomCount(e.target.value)}
                              className="flex-1 px-3 py-2 bg-white/10 rounded-lg text-white"
                              placeholder="Set custom count"
                            />
                            <Button
                              onClick={handleUpdatePledgeCount}
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              Set
                            </Button>
                          </div>
                          <Button
                            variant="outline"
                            onClick={handleResetPledgeCount}
                            className="w-full"
                          >
                            Reset to Default
                          </Button>
                        </div>
                      </div>

                      {/* Recent Pledges */}
                      <div className="bg-white/10 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Recent Pledges</h3>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {JSON.parse(localStorage.getItem('pledges') || '[]').map((pledge, index) => (
                            <div key={index} className="bg-white/5 rounded p-2 text-sm text-white">
                              <div className="font-medium">{pledge.name}</div>
                              <div className="text-white/60">{pledge.location}</div>
                              <div className="text-white/40 text-xs">
                                {new Date(pledge.timestamp).toLocaleString()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        className="w-full"
                        onClick={handleExportPledges}
                      >
                        Export to Excel
                      </Button>
                    </div>
                  )}

                  {/* Contacts Tab */}
                  {activeTab === 'contacts' && (
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Messages</h3>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {/* Contact messages would go here */}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Manage Admins Tab (Owner Only) */}
                  {isOwner && activeTab === 'admins' && (
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Add Admin</h3>
                        <div className="space-y-4">
                          <input
                            type="email"
                            value={newAdmin.email}
                            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                            className="w-full px-3 py-2 bg-white/10 rounded-lg text-white"
                            placeholder="admin@powderproject.org"
                          />
                          <input
                            type="password"
                            value={newAdmin.password}
                            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                            className="w-full px-3 py-2 bg-white/10 rounded-lg text-white"
                            placeholder="Set password"
                          />
                          <Button
                            className="w-full"
                            onClick={handleAddAdmin}
                          >
                            Add Admin
                          </Button>
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Current Admins</h3>
                        <div className="space-y-2">
                          {admins.map((admin, index) => (
                            <div key={index} className="flex items-center justify-between bg-white/5 rounded p-2">
                              <span className="text-white">{admin.email}</span>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => handleRemoveAdmin(admin.email)}
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdminPanel;