#!/bin/bash

#wget https://github.com/nodejs/node/archive/refs/heads/main.zip
#unzip main.zip
#cd node-main
#./configure
#make
#make install
#cd ..v

echo -----------------------------------Instalando dependências------------------------------------------------
apt update -y
apt install python3 -y
apt install python3-pip -y
apt install docker.io -y
pip install -r requeriments.txt
apt install wget -y
apt install curl -y
apt install samtools -y
pip install Bio
pip install pymongo
pip install flask
pip install flask_login
pip install matplotlib
pip install bioinfokit

curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install nodejs -y

wget https://ftp.ncbi.nlm.nih.gov/blast/executables/blast+/2.15.0/ncbi-blast-2.15.0+-x64-linux.tar.gz
tar -xf ncbi-blast-2.15.0+-x64-linux.tar.gz

echo -------------------------------------Preparando Genomas---------------------------------------------------
mkdir /website/static/dados/
mkdir /website/static/dados/Criollo_new
cp pre* /website/static/dados/Criollo_new/
mkdir ../website/static/dados/Matina_new
cp pre* /website/static/dados/Matina_new/
mkdir /website/static/dados/C1074
cp pre* /website/static/dados/C1074/
mkdir /website/static/blast_db

#BAIXANDO, DESCOMPACTANDO E RENOMEANDO GENOMAS E ANOTAÇÕES
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/000/403/535/GCA_000403535.1_Theobroma_cacao_20110822/GCA_000403535.1_Theobroma_cacao_20110822_genomic.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/000/403/535/GCA_000403535.1_Theobroma_cacao_20110822/GCA_000403535.1_Theobroma_cacao_20110822_genomic.gff.gz

wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/208/745/GCF_000208745.1_Criollo_cocoa_genome_V2/GCF_000208745.1_Criollo_cocoa_genome_V2_genomic.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/000/208/745/GCF_000208745.1_Criollo_cocoa_genome_V2/GCF_000208745.1_Criollo_cocoa_genome_V2_genomic.gff.gz

wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/036/013/995/GCA_036013995.1_ASM3601399v1/GCA_036013995.1_ASM3601399v1_genomic.fna.gz
wget https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/036/013/995/GCA_036013995.1_ASM3601399v1/GCA_036013995.1_ASM3601399v1_genomic.gff.gz

gunzip GCA_000403535.1_Theobroma_cacao_20110822_genomic.fna.gz
mv GCA_000403535.1_Theobroma_cacao_20110822_genomic.fna Matina.fasta
mv Matina.fasta /website/static/dados/Matina_new/.
gunzip GCF_000208745.1_Criollo_cocoa_genome_V2_genomic.fna.gz
mv GCF_000208745.1_Criollo_cocoa_genome_V2_genomic.fna Criollo.fasta
mv Criollo.fasta /website/static/dados/Criollo_new/.
gunzip GCA_036013995.1_ASM3601399v1_genomic.fna.gz
mv GCA_036013995.1_ASM3601399v1_genomic.fna C1074.fasta
mv C1074.fasta /website/static/dados/C1074/.

gunzip GCA_000403535.1_Theobroma_cacao_20110822_genomic.gff.gz
mv GCA_000403535.1_Theobroma_cacao_20110822_genomic.gff Matina.gff
mv Matina.gff /website/static/dados/Matina_new/.
gunzip GCF_000208745.1_Criollo_cocoa_genome_V2_genomic.gff.gz
mv GCF_000208745.1_Criollo_cocoa_genome_V2_genomic.gff Criollo.gff
mv Criollo.gff /website/static/dados/Criollo_new/.
gunzip GCA_036013995.1_ASM3601399v1_genomic.gff.gz
mv GCA_036013995.1_ASM3601399v1_genomic.gff C1074.gff
mv C1074.gff /website/static/dados/C1074/.

#PREPARANDO BANCO DE DADOS DO BLAST
echo ----------------------------------Preparando banco de dados BLAST-----------------------------------------
ncbi-blast-2.15.0+/bin/makeblastdb -in /website/static/dados/Matina_new/Matina.fasta -title Matina_nucl -dbtype nucl -out /website/static/blast_db/Matina_nucl_db
ncbi-blast-2.15.0+/bin/makeblastdb -in /website/static/dados/Criollo_new/Criollo.fasta -title Criollo_nucl -dbtype nucl -out /website/static/blast_db/Criollo_nucl_db
#ncbi-blast-2.15.0+/bin/makeblastdb -in /website/static/dados/C174P/C174P.fasta -title C174P_nucl -dbtype nucl -out /website/static/blast_db/C174P_nucl_db
#ncbi-blast-2.15.0+/bin/makeblastdb -in /website/static/dados/C174/C174.fasta -title C174_nucl -dbtype nucl -out /website/static/blast_db/C174_nucl_db
#ncbi-blast-2.15.0+/bin/makeblastdb -in /website/static/dados/C1074P/C1074P.fasta -title C1074P_nucl -dbtype nucl -out /website/static/blast_db/C1074P_nucl_db
ncbi-blast-2.15.0+/bin/makeblastdb -in /website/static/dados/C1074/C1074.fasta -title C1074_nucl -dbtype nucl -out /website/static/blast_db/C1074_nucl_db

echo ----------------------------------Preparando banco de dados mongo-----------------------------------------

ls
pwd
cp pre-database.sh /website/static/dados/Criollo_new/
cp /website/static/dados/Criollo_new/prep-database.py /website/static/dados/Criollo_new/
cp pre-database.sh /website/static/dados/Matina_new/
cp /website/static/dados/Matina_new/prep-database.py /website/static/dados/Matina_new/
cp pre-database.sh /website/static/dados/C1074/
cp /website/static/dados/C1074/prep-database.py /website/static/dados/C1074/
#mkdir ./website/static/dados/C1074P/prep_db
#mkdir ./website/static/dados/C174/prep_db
#mkdir ./website/static/dados/C174P/prep_db

samtools faidx website/static/dados/Criollo_new/Criollo.fasta -o website/static/dados/Criollo_new/Criollo.fasta.fai
bash website/static/dados/Criollo_new/pre-database.sh Criollo
samtools faidx website/static/dados/Matina_new/Matina.fasta -o website/static/dados/Matina_new/Matina.fasta.fai
bash website/static/dados/Matina_new/pre-database.sh Matina
samtools faidx website/static/dados/C1074/C1074.fasta -o website/static/dados/C1074/C1074.fasta.fai
bash website/static/dados/C1074/pre-database.sh C1074
#cd ../C1074P
#bash ../../../pre-database.sh C1074P
#cd ../C174
#bash ../../../pre-database.sh C174
#cd ../C174P
#bash ../../../pre-database.sh C174P

echo ------------------------------------Preparando Jbrowse2--------------------------------------------------
npm install -g @jbrowse/cli
jbrowse add-assembly ./website/static/dados/Criollo_new/Criollo.fasta --load inPlace
jbrowse add-track ./website/static/dados/Criollo_new/Criollo.gff --load inPlace
cp config.json /website/static/dados/Criollo_new/.
#sed 's/Criollo.fasta/website/static/dados/Criollo_new/Criollo.fasta/g' /website/static/dados/Criollo_new/config.json > /website/static/dados/Criollo_new/config1.json
#sed 's/Criollo.fasta.fai/../static/dados/Criollo_new/Criollo.fasta.fai/g' /website/static/dados/Criollo_new/config1.json > /website/static/dados/Criollo_new/config2.json
#sed 's/Criollo.gff/../static/dados/Criollo_new/Criollo.gff/g' /website/static/dados/Criollo_new/config2.json > /website/static/dados/Criollo_new/config.json
rm config.json

jbrowse add-assembly /website/static/dados/Matina_new/Matina.fasta --load inPlace
jbrowse add-track /website/static/dados/Matina_new/Matina.gff --load inPlace
cp config.json /website/static/dados/Matina_new/.
#sed 's/Matina.fasta/../static/dados/Matina_new/Matina.fasta/g' /website/static/dados/Matina_new/config.json > /website/static/dados/Matina_new/config1.json
#sed 's/Matina.fasta.fai/../static/dados/Matina_new/Matina.fasta.fai/g' /website/static/dados/Matina_new/config1.json > /website/static/dados/Matina_new/config2.json
#sed 's/Matina.gff/../static/dados/Matina_new/Matina.gff/g' /website/static/dados/Matina_new/config2.json > /website/static/dados/Matina_new/config.json
rm config.json

jbrowse add-assembly /website/static/dados/C1074/C1074.fasta --load inPlace
jbrowse add-track /website/static/dados/C1074/C1074.gff --load inPlace
cp config.json /website/static/dados/C1074/.
#sed 's/C1074.fasta/../static/dados/C1074/C1074.fasta/g' /website/static/dados/C1074/config.json > /website/static/dados/C1074/config1.json
#sed 's/C1074.fasta.fai/../static/dados/C1074/C1074.fasta.fai/g' /website/static/dados/C1074/config1.json > /website/static/dados/C1074/config2.json
#sed 's/C1074.gff/../static/dados/C1074/C1074.gff/g' /website/static/dados/C1074/config2.json > /website/static/dados/C1074/config.json
rm config.json
#cp C1074P/C1074P.fasta . | jbrose add-assembly C1074P.fasta --load inPlace
#cp C174/C174.fasta . | jbrowse add-assembly C174.fasta --load inPlace
#cp C174P/C174P.fasta . | jbrowse add-assembly C174P.fasta --load inPlace

python3 website/website.py

