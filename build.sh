#!/bin/bash
gulp
cordova prepare
cordova build $*
