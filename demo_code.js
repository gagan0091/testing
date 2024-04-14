const vision = require("@google-cloud/vision");
const { ImageAnnotatorClient } = require("@google-cloud/vision");

const CREDENTIALS = JSON.parse(JSON.stringify({
    type: "service_account",
    project_id: "imageprocessing-383710",
    private_key_id: "c7ec652a085ab7becf9321ab027300cedac45a9e",
    private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+8/dm81i93uoM\nblvteyyhZz0AtAs79uHA45WYVKY32b/4IsPXy0cxmYppCjQQmAoQnyWXiRq8ANzq\nGyqAqfhuDQQyaEZQxJbR2SMoFrnLhkB87Fi9SzPEE0Y6+iR1kSF/K6aV0fe6JVne\n0yh+jU43IVDhKTFtBjFhUPo0UaQLnn+xWsxOAbfW5MTIM6oqQkuzQzojWqxb/gtw\nPFlCCyS344Z4EGV3iLJUX3Vfp9UIJiPxk8XBaaSCU9Xy3IGQPyYnjwN5YZDFCioM\neRR4QmuWRzMEjBEdq/mtyNxqbzbCfB8sK+OPEUgwkPg8bCSaw4ldFzQ6GyhnVpQC\nkZ76VQ35AgMBAAECggEAAn41qY3Nh6wSfu9NarIwHNrX0munVmT0oVOvUy3uvh2t\nCpCsoSN9plWAd7ra/2j2v60OPPZcp530xGcupL+jV0968awIF/ubEvoMYhR64D/8\nVU0yIuWJk1qjkPdNVM4cY3hGzF+xhegBLn4wAgf3AJQCJfBnXWqmaCR6Icb7lu24\n3P55QRl3bDIs2oU5Ldje2DyK9S3jqiYJuP+YIuxf36vQ8fg68IU1Q35zy8hLedNB\nInmAPuhCUPjC03UeaJqP7fYTTVvysoKbCj5jbD/wewewXfspTjgBVQCPW/8FCaWn\ny88VgFayy6faLwtMdG0Oogw1Ad2Hq3BEGCJ+HrfA0QKBgQD+xqk/HKQPkRmTfIHF\n2tWyr6J7j+Ob9xDaciP+yHopBp3UjxzQnVbsA7s1hhh4L4kYsGJl8ubjvK2I12VZ\nakrLRsQIjZOBlM0vQBv3RlRaJjJZAh8UIxfsTUGCpsza5D0dJMwgHo6I49yIGK3H\niGEbQr8A7WlZa5SH/9PZZHCEqQKBgQC/3s/YfmFabtREDJQsnrJKXkfcxA40eTYV\nkVrFqCAidk+lVT7bRojBgTva800WkugUWVmM3Pui5UQ5qz7yrNN4h2gN5vr1lQ00\nlprGA0JV0DjvgDEjT9TGk9X38pHH3ZcGrVB8hALM9OvWYjTFWXCpYyJw1m0OwlTe\nJrGUAWrA0QKBgHtA7nXazD+/qYjhTgLC2GkmcMuoE6vLPbsARwumPvsD+Wzwgzcl\nNvzc3T+KjOHv1To9cozxkuOPzsAJvD0in+ZxaLreiwLAUvdN43mf64TlP6wxy4k5\nZQRrZ4rmWOp4SlyEBcBwJ/JvkavBjKigAKJoivDO6g1ZbzTP/dQItCppAoGBALwP\nvFFKrklhUBTS73k8oyxZdL5iPDoahHRnYD1UKQseQ7qd71olrG1eKjjVOL3jiC5J\n1YhIISzs4w5TVwOteiktL0RRHbIQQj1FULa9AwvxZ5z4XTFrUfbBeHvq+hCYlSsq\nPTWOfuA9P9uFrouwusiMLnnC8moA+AY2jt+u89/BAoGBAPHo75lH2s+2asIcUFtY\nN7rme7rUDXBEh07NfFoM714jDbdZwvNLPhnm2VLsZ6hDbPQpcow+PZcqj0gB5Nzm\n7P2eYngvpKv6rjEIjuqaYG9AxofLipdPGCwuaGHAqn7O8buc58UPv1muPvH7SE8+\nTMPggSy3YCVHQdd1x7uFcr+k\n-----END PRIVATE KEY-----\n",
    client_email:"imageprocssing@imageprocessing-383710.iam.gserviceaccount.com",
    client_id: "108586475373944897534",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:"https://www.googleapis.com/robot/v1/metadata/x509/imageprocssing%40imageprocessing-383710.iam.gserviceaccount.com",
  }));

const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email,
  },
};

const client = new vision.ImageAnnotatorClient(CONFIG);

async function detectText() {
  const [result] = await client.textDetection("trr.jpg");
  const detections = result.textAnnotations;
  console.log("Text:");
  detections.forEach((text) => console.log(text.description));
}

detectText();

// const detectLandmark = async (file_path) => {
//     let [result] = await client.landmarkDetection('landmark.jpeg');
//     console.log(result.landmarkAnnotations[0].description);
// };

// detectLandmark();
