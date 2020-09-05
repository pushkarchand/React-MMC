API Service for Mars Mission control (MMC)
=============

- #### Prerequisites
    - python 3.7 (above) [https://phoenixnap.com/kb/how-to-install-python-3-ubuntu]
    - GIT [https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-18-04-quickstart]

-------

- #### Commands to clone the repository
    $ git clone https://gitlab.com/mathco-engineering/mars-mission-control.git
    $ cd mars-mission-control
    $ git checkout * (checkout the correct version)
-------
- ##### Create a virtualenv and activate it::
    [https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/26/python-virtual-env/]
    $ python3 -m venv venv
    $ . venv/bin/activate

    Or on Windows cmd::

    $ py -3 -m venv venv
    $ venv\Scripts\activate.bat
----
-  #### Install API server requirements::
    $ cd services/api
    $ pip install -r requirement.txt
----
- #### Commands to run application
    > export FLASK_APP=marsapi
    > export FLASK_ENV=development
    > flask run

    Or on Windows cmd::
    
    > set FLASK_APP=marsapi
    > set FLASK_ENV=development
    > flask run

    Open http://127.0.0.1:5000 in a browser.
-----

- #### Steps to run API Test cases
    $ pip install '.[test]'
    $ pytest

    Run with coverage report::

    $ coverage run -m pytest
    $ coverage report
    $ coverage html  # open htmlcov/index.html in a browser