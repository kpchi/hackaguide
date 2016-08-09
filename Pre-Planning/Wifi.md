# WiFi

### Bandwidth, Leases and Filtering

- Number of devices?
	- Multiply expected total no. of people on-site by 2.5 as a rough count of number of devices.
- Number of available leases?
	- Get number of Wifi Access Points's (APs) around the venue and leases available per AP (in practice).
	- Ask if the venue can provide additional infrastructure if no. of leases is less than the no. of devices.
- Bandwidth Capacity?  
	- Venue's maximum bandwidth possible?


- Network throttling / Port filtering?
	- Port Filtering done by the venue?  [The Hack Day Manifesto](http://hackdaymanifesto.com#network "The Hack Day Manifesto") has a good list of ports to keep unfiltered
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
	- Any Distrbuted Denial of Service  measures venue's infrastructure might have that will affect the hackathon?


### Wifi Failover

- Failover Planning
	- What happens if WiFi goes down, are there ethernet ports available? 
		- Are the ethernet ports MAC Address specific?  
		- Are the ethernet ports on the same IP segment as WiFi?
		- Where are the ethernet ports located?

- How long till the failover is available?
	- How do you communicate to attendees the downtime.
	- What do attendees have to do to conenct to the failover.


### On-Site Support

- On-site Support
	- Anyone from venue's Network Admin team around on-site if something happens?
	- (optional) Access to live information about how much bandwidth has been used and which protocols?  Done via SNMP Traps of the Wifi AP's


### External Internet Service Providers (ISPs)

- External ISP Providers?
	- Contact Sami re: Contract and Requirements