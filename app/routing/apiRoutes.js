app.get("/api/reservations", function(req, res) {
    return res.json(currentReservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});