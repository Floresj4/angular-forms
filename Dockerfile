FROM centos

#install extract packages for enterprise linux
#and nodejs
RUN yum install -y epel-release \
    nodejs
