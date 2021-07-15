module.exports = {
    index: (req, res) => {
        let cssSheets = ["index"];
        let title = "Inicio";
        return res.render("index.ejs", {cssSheets, title})
    }
}