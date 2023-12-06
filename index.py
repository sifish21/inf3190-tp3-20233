# Copyright 2023 <Votre nom et code permanent>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from flask import Flask
from flask import render_template
from flask import g
from flask import redirect,url_for,request
from .database import Database
import random
import re

app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


def val_nom(string):
    return len(string) >= 3 and len(string) <= 20

def val_ville_race_espece(string):
    return len(string) >= 2

def val_age(age):
    return int(age) >= 0 and int(age) <= 30

def val_email(email):
    regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    return re.match(regex, email)

def val_adresse(string):
    return len(string) > 0

def val_cp(string):
    with_space = r'^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$'
    whithout_space = r'^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$'
    return re.match(with_space, string) or re.match(whithout_space, string)

def val_description(string):
    return len(string) > 0 and len(string) <= 150


def get_5_random_indexes():
    db = get_db()
    animaux = db.get_animaux()
    nb_animaux = len(animaux)
    array = []
    while len(array) < 5:
        id = random.randint(1, nb_animaux)
        if id not in array:
            array.append(id) 
    return array


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


@app.route('/')
def index():
    animaux_en_vedette = get_5_random_indexes()
    db = get_db()
    animaux = [db.get_animal(number) for number in animaux_en_vedette]
    db.disconnect()

    return render_template('index.html', animaux=animaux)


@app.route('/adoption')
def adoption():
    return render_template('adoption.html')


@app.route('/animal/<int:animal_id>')
def page_animal(animal_id):
    db = get_db()
    animal = db.get_animal(animal_id)
    db.disconnect()
    if(animal != None):
        return render_template('animal.html', animal=animal)
    else:
        return render_template('error404.html')
    
    
@app.route('/succes')
def succes():
    return render_template('succes.html')


@app.route("/recherche", methods=["POST"])
def recherche():
    string = request.form["search-bar"]
    db = get_db()
    matches = db.get_match(string)
    ids = [match[0] for match in matches]
    animaux = [db.get_animal(id) for id in ids]

    return render_template("recherche.html", animaux=animaux)


@app.route("/submit", methods=["POST"])
def submit():
    if val_nom(request.form["nom"]) and \
        val_ville_race_espece(request.form["espece"]) and \
        val_ville_race_espece(request.form["race"]) and \
        val_ville_race_espece(request.form["ville"]) and \
        val_age(request.form["age"]) and \
        val_email(request.form["email"]) and \
        val_adresse(request.form["num-civique"]) and \
        val_cp(request.form["code-postal"]) and \
        val_description(request.form["description"]):
        database = get_db()
        database.add_animal(request.form["nom"],
                            request.form["espece"],
                            request.form["race"],
                            request.form["age"],
                            request.form["description"],
                            request.form["email"],
                            request.form["num-civique"],
                            request.form["ville"],
                            request.form["code-postal"])
        database.disconnect()
    return redirect(url_for("succes"))


@app.route('/liste')
def liste():
    db = get_db()
    animaux = db.get_animaux()
    db.disconnect()
    return render_template('liste.html', animaux=animaux)





