FROM centos

#install extract packages for enterprise linux
#and nodejs
RUN yum install -y epel-release
RUN yum install -y nodejs
RUN npm install http-server -g
RUN mkdir /angular-forms/

#move compiled distribution content
COPY ./dist/angular-forms/ /angular-forms

EXPOSE 4300
ENTRYPOINT http-server -p 4300