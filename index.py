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

app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database

def data_is_valid():
    return True

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


@app.route('/')
def form():
    # À remplacer par le contenu de votre choix.
    return render_template('index.html')

@app.route('/adoption')
def adoption():
    return render_template('adoption.html')

@app.route('/succes')
def succes():
    return render_template('succes.html')

@app.route("/submit", methods=["POST"])
def submit():
    if data_is_valid():
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
