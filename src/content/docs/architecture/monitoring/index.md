---
title: Monitoring
---

An IT monitoring system such as [Prometheus](https://prometheus.io/) should always be installed and configured to monitor all the relevant sensors on all servers. These monitoring systems can warn operational staff when server error conditions are approaching. For example, a sensor could monitor free disk space. If the free disk space crosses a warning threshold, the monitoring system will alert operations. Operations can then fix this issue (for example, deleting large log files) before it becomes a problem.

To facilitate the use of monitoring systems, some Plxtra backend services include built in SNMP sensors. These sensors monitor conditions within the software application. For example, they could monitor internal queue lengths. Like hardware sensors, these SNMP sensors can alert operational staff of warnings and errors - enabling them to rectify the problems as soon as possible.
