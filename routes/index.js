const router = require("express").Router();
const fs = require("fs").promises;
const path = require("path");

router.get("/", async(req, res) => {
  try {
        const filePath = path.join(__dirname, "json", "result.json");
        const data = await fs.readFile(filePath, "utf8");
        const jsonData = JSON.parse(data);
        return res.render("./index.ejs", {
            data : jsonData
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return res.status(500).send('Internal Server Error');
    }
});

router.post("/result", async(req,res) => {
    const { station_1, station_2 } = req.body;

    if(station_1 == station_2) {
        return res.redirect("/");
    } else if((station_1 == null || undefined) || (station_2 == null || undefined)) {
        return res.redirect("/");
    }

    try {
        const filePath = path.join(__dirname, "json", "result.json");
        const data = await fs.readFile(filePath, "utf8");
        const jsonDatas = JSON.parse(data);
        let data_1 = {};
        let data_2 = {};
        jsonDatas.find(jd => {
            if(jd.field1 == station_1) {
                data_1 = jd;
            } else if(jd.field1 == station_2) {
                data_2 = jd;
            }
        })
        return res.render("./result.ejs", {
            station_1_name : data_1.station_name,
            station_1_number : data_1.number_of_stores,
            station_2_name : data_2.station_name,
            station_2_number : data_2.number_of_stores,
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return res.status(500).send('Internal Server Error');
    }
    
})

module.exports = router;