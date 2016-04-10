---
name: WiFi
---

---
Leases and Bandwidth
---

- Number of devices?
	- Multiply expected total no. of people on-site by 2.5 as a rough count of number of devices.
- Number of available leases?
	- Get number of Wifi AP's around the venue and leases available per AP (in practice).
	- Ask if the venue can provide additional infrastructure if no. of leases is less than the no. of devices.
- Bandwidth Capacity?  
	- Venue's hardware maximum capacity?
	- (UCL Venue Reference) 250 people (including volunteers and sponsors) peaked at 30 Gigabits per hour sustained for an hour.


- Network throttling / Port filtering?
	- Port Filtering done by the venue?  [The Hack Day Manifesto](http://hackdaymanifesto.com/#network "The Hack Day Manifesto") has a good list of ports to keep unfiltered
		- TL:DR SSH (22)
		- DNS (53 — TCP & UDP)
		- VPN (47, 500, 1701, 1723, 5500)
		- HTTP (80)
		- NTP (123 — UDP)
		- HTTPS (443)
		- Submissions (587)
		- IMAPS (993)
		- MQTT (1883)
		- CVS (2401)
		- Subversion (3690)
		- XMPP/Jabber (5222)
		- Git (9418)
	- IP Whitelisting on venue's side for various sites to download software
	- Any DDoS measures venue's infrastructure might have that will affect the hackathon?


---
Wifi Failover
---

- Failover Planning
	- What happens if WiFi goes down, are there ethernet ports available? 
		- Are the ethernet ports MAC Address specific?  
		- Are the ethernet ports on the same IP segment as WiFi?
		- Where are the ethernet ports located?


---
On-Site Support
---

- On-site Support
	- Anyone from venue's Network Admin team around on-site if something happens?
	- (Optional) SNMP Traps of network utilisation so people can make a visualization of network traffic?


---
External Internet Service Providers (ISPs)
---

- External ISP Providers?
	- Contact Sami re: Contract and Requirements