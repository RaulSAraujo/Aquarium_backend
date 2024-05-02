

const router = [
    {
        method: "POST",
        path: "/aquarium/{aquarium_id}/pets",
        handler: (req, h) => {
            return "Aquarium router";
        }
    },
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/pets",
        handler: (req, h) => {
            return "Aquarium router";
        }
    },
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/pets/{id}",
        handler: (req, h) => {
            return "Aquarium router";
        }
    },
    {
        method: "PUT",
        path: "/aquarium/{aquarium_id}/pets/{id}",
        handler: (req, h) => {
            return "Aquarium router";
        }
    },
    {
        method: "DELETE",
        path: "/aquarium/{aquarium_id}/pets/{id}",
        handler: (req, h) => {
            return "Aquarium router";
        }
    }
];

module.exports = router;