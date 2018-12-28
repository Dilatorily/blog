#!/bin/bash

certbot renew --quiet --pre-hook "/home/ubuntu/fictional-octo-spork/scripts/stop.sh" --post-hook "/home/ubuntu/fictional-octo-spork/scripts/start.sh"
