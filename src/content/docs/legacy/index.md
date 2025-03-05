---
title: Legacy notes
---

# Market Holiday

Use pgadmin to adjust market holidays.  Need to add one record for each day of holiday in MarketHoliday markets table at AWS.

For FNSX,
You can see existing holidays with select * from public.allholidaysformarket('FNSX'). To add new dates with the addholiday function. E.g. select * from public.addholiday('FNSX', '2024-12-25').

# Adding new Motif website to server (Apache2)

1. Log into server with Apache2
1. `cd /var/www`
1. create sub directory for Motif website `sudo mkdir <Motif website folder name>`
1. Set ownership to motif: `sudo chown motif:motif <Motif website folder name>`
1. Back to home `cd ~`
1. Create soft link to new directory from home `ln -s /var/www/<Motif website folder name>`
1. Go into apache-sites subdirectory `cd apache-sites`
1. Copy an existing Motif website conf file to name of new Motif website `sudo cp <existing>.conf <Motif website folder name>.conf`
1. Open new .conf file with Nano `sudo nano <Motif website folder name>.conf`
1. Change references to existing site to new Motif website - then save
1. Enable new website `sudo a2ensite <Motif website folder name>`
1. Reload apache `sudo systemctl reload apache2`
1. Can review new site with `sudo apache2ctl -S`

1. Log into AWS console
1. Go to Route 53 | Hosted zones
1. Select (or add) Hosted zone under which website will run
1. Create an Alias A record for website host name and point it to `dualstack.tenant-...`

1. Go to EC2 | Load balancers
1. Select `tenant-...`
1. For both `HTTPS:443` and `HTTP:80` listeners do the following:
1. Select listener
1. Add (or edit) `HTTP Host Header is <website host name>` and forward to target group specifying server(s) where website is hosted under apache
