export const helmUIJson = [
    {
        "schemaIDs": [
            "#/properties/image",
            "#/properties/containerPort",
            "#/properties/replicas"
        ],
        "uiSchema": {
            "#/properties/replicas": {
                "ui:widget": "range"
            }
        },
        "metaData": {
            "name": "Basics",
            "icon": "M17 8l4 4m0 0l-4 4m4-4H3"
        }
    },
    {
        "schemaIDs": [
            "#/properties/resources"
        ],
        "uiSchema": {},
        "metaData": {
            "name": "Resources",
            "icon": "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        }
    },
    {
        "schemaIDs": [
            "#/properties/probe",
            "#/properties/livenessProbe"
        ],
        "uiSchema": {
            "#/properties/probe": {
                "settings": {
                    "initialDelaySeconds": {
                        "ui:widget": "range"
                    },
                    "periodSeconds": {
                        "ui:widget": "range"
                    },
                    "successThreshold": {
                        "ui:widget": "range"
                    },
                    "timeoutSeconds": {
                        "ui:widget": "range"
                    },
                    "failureThreshold": {
                        "ui:widget": "range"
                    }
                }
            },
            "#/properties/livenessProbe": {
                "settings": {
                    "initialDelaySeconds": {
                        "ui:widget": "range"
                    },
                    "periodSeconds": {
                        "ui:widget": "range"
                    },
                    "successThreshold": {
                        "ui:widget": "range"
                    },
                    "timeoutSeconds": {
                        "ui:widget": "range"
                    },
                    "failureThreshold": {
                        "ui:widget": "range"
                    }
                }
            }
        },
        "metaData": {
            "name": "Health",
            "icon": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }
    },
    {
        "schemaIDs": [
            "#/properties/vars"
        ],
        "uiSchema": {
            "#/properties/vars": {
                "additionalProperties": {
                    "type": "string"
                }
            }
        },
        "metaData": {
            "name": "Environment Variables",
            "icon": "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }
    },
    {
        "schemaIDs": [
            "#/properties/secretEnabled",
            "#/properties/sealedSecrets"
        ],
        "uiSchema": {
            "#/properties/sealedSecrets": {
                "additionalProperties": {
                    "type": "string"
                }
            }
        },
        "metaData": {
            "name": "Secrets",
            "icon": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        }
    },
    {
        "schemaIDs": [
            "#/properties/volumes"
        ],
        "uiSchema": {
            "#/properties/volumes": {
                "items": {
                    "emptyDir": {
                        "ui:widget": "hidden"
                    },
                    "configMapValue": {
                        "ui:widget": "textarea"
                    }
                }
            }
        },
        "metaData": {
            "name": "Volumes",
            "icon": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        }
    },
    {
        "schemaIDs": [
            "#/properties/ingress"
        ],
        "uiSchema": {},
        "metaData": {
            "name": "Ingress",
            "icon": "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        }
    },
    {
        "schemaIDs": [
            "#/properties/podDisruptionBudgetEnabled",
            "#/properties/spreadAcrossNodes"
        ],
        "uiSchema": {},
        "metaData": {
            "name": "High Availability",
            "icon": "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        }
    },
    {
        "schemaIDs": [
            "#/properties/podAnnotations",
            "#/properties/gitSha",
            "#/properties/gitRepository"
        ],
        "uiSchema": {},
        "metaData": {
            "name": "Misc",
            "icon": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        }
    }
]
