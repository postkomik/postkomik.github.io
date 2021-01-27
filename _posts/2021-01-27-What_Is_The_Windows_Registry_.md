---
layout: post
title:  "What Is The Windows Registry?"
author: mas cemplon
categories: [ Computers, Technology ]
tags: [ Computers ]
image: 
beforetoc: "The Windows registry is a database which stores settings and options for the operating system for Microsoft Windows 32-bit versions, 64-bit versions and Windows Mobile.."
toc: true
---




It contains information and settings for all the hardware, software, users, and preferences of the PC. Whenever a user makes changes to "Control Panel" settings, or file associations, system policies, or installed software, the changes are reflected and stored in the registry.

The registry is actually a ...



windows registry,windows registry repair,windows registry scan, repair registry, fix registry,scan



The Windows registry is a database which stores settings and options for the operating system for Microsoft Windows 32-bit versions, 64-bit versions and Windows Mobile.

It contains information and settings for all the hardware, software, users, and preferences of the PC. Whenever a user makes changes to "Control Panel" settings, or file associations, system policies, or installed software, the changes are reflected and stored in the registry.

The registry is actually a big file where a lot of setting can be stored.

This file has been around quite a while and has had different names.

The first windows version that used the windows registry to store settings was windows 3.11 and the registry in that version of windows was called Reg.dat.

In Windows 95 & 98 the registry files are named User.dat and System.dat and are stored in the \Windows\ directory.

Windows ME called the registry files, Classes.dat, User.dat, and System.dat and stored them in the \Windows\ directory.

Finally the newest versions of windows like, Windows NT, 2000, 2003, & XP stores the registry files like this,

The Registry files are stored in %SystemRoot%\System32\Config\:

• Sam
• Security
• Software
• System
• Default
• Userdiff
• NTUSER.dat
• The NTUSER.dat file is stored in the profile folder.

The Windows Registry was introduced to tidy up the old way of storing text entries in INI files. These entries had previously been used to store configuration settings for Windows programs.
The ini files where stored in a lot of different directories and many programs used their own ini file for some or all of their settings. This way of using ini files all over the system, made them difficult to keep track of and handle in an easy and logical way.

What’s Good with the Registry

Changing from having one or more INI Files per program to one centralised registry has some obvious and some not so obvious benefits:

• The registry keeps machine configuration separate from user configuration. When a user logs into a Windows NT/XP/2003 computer, their registry settings are merged with the system wide settings. This allows programs to more easily keep per-user configuration, as they can just work with the 'current user' key, whereas in the past they tended to just keep system-wide per-program settings. There are always some system wide settings that are common for all users though.

• Group Policy allows administrators on a Windows-based computer network to centrally manage program and policy settings. This is not used in a home environment, only in corporations with a dedicated logon server.

• Because the registry is accessed through a special API it is available to scripts and remote management using WMI. Each script does not have to be customised for every application's unique configuration file layouts and restrictions.

• The registry can be accessed as one item over a network connection for remote management/support, including from scripts, using the standard API.

• It can be backed up more easily, in that it is just a small number of files in specific locations.

Bad things with the Registry

Not all that shines is gold. The Registry introduces some problems as well:

• It is a single point of failure - damage to the Registry can render a Windows system unbootable, in extreme cases to a point that can not be fixed, and requires a full reinstall of Windows. This is why it is so important to use registry scan and repair utilities, while the registry still can be repaired.

• Any program which wants to manipulate the registry must use special Windows API functions whereas a configuration file can be manipulated using normal text file-processing techniques.

• Configuration files can contain comments to help the user by explaining what values are for and how they can be changed, the registry cannot. And the registry use something called guids in a large scale. Long strange unique numbers that is completely meaningless to humans. Making handling much harder.

• It is more difficult to backup - it cannot be done 'live' because it is always in use, and thus requires special software such as ntbackup.

• Restoring parts of the registry is hard because you cannot easily extract data from backed up registry files

• Any application that doesn't uninstall properly, or doesn't have an uninstaller, can leave entries in the registry, which can lead over time to increased file size and decreased performance. And once again, here’s the major reason why you must use a registry scan/clean and repair software.

The registry will be redone once more with the release of the new Vista Operating System from Microsoft.


THOUSANDS QUALITY but FREE PLR ARTICLES @ www.BuildWebPage.org
You can say thanks for the articles by giving us a link back at http://www.BuildWebPage.org on your links page.
