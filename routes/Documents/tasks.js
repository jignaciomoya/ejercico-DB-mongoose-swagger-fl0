module.exports = {
    paths: {
        "/": {
            get: {
                tags: {
                    Tasks: "Get all tasks",
                },
                description: "Get all Tasks",
                operationId: "getTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Tasks get successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },
        "/create": {
            post: {
                tags: {
                    Tasks: "Create a task",
                },
                description: "Create Task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },
        "/id/{_id}": {
            put: {
                tags: {
                    Tasks: "Update a task",
                },
                description: "Update Task",
                operationId: "updateTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of Task to be updated",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" },
                        },
                    },
                },
                responses: {
                    200: { description: "Task updated successfully" },
                    500: { description: "Server error" },
                },
            },
        },
        "/delete/{_id}": {
            delete: {
                tags: {
                    Tasks: "Delete a task",
                },
                description: "Delete Task",
                operationId: "deleteTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of Task to be deleted",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" },
                        },
                    },
                },
                responses: {
                    200: { description: "Task deleted successfully" },
                    500: { description: "Server error" },
                },
            },
        },
    },
};