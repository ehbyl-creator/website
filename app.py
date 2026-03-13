from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='docs/static')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/tarifs')
def tarifs():
    return render_template("tarifs.html")

@app.route('/formations')
def formations():
    return render_template("formations.html")

@app.route('/reiki')
def reiki():
    return render_template('reiki.html')

@app.route('/hypnose')
def hypnose():
    return render_template('hypnose.html')

@app.route('/sophrologie')
def sophrologie():
    return render_template('sophrologie.html')

@app.route('/lienstransgenerationnels')
def lienstransgenerationnels():
    return render_template('lienstransgenerationnels.html')

@app.route('/methodeleaa')
def methodeleaa():
    return render_template('methodeleaa.html')

if __name__ == '__main__':
    app.run(debug=True)