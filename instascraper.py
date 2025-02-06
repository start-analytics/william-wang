import requests
import json
import io
from bs4 import BeautifulSoup
from PIL import Image

def fetch_instagram_data(instagram_url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    # 发送请求获取 Instagram 页面
    response = requests.get(instagram_url, headers=headers)
    if response.status_code != 200:
        print("❌ Failed to retrieve the page. Make sure the URL is correct and Instagram allows access.")
        return None

    # 解析 HTML
    soup = BeautifulSoup(response.text, "html.parser")

    # 提取图片
    image_blobs = []
    images = soup.find_all("img")

    for img in images:
        img_url = img.get("src")
        if img_url:
            try:
                img_response = requests.get(img_url)
                img_blob = io.BytesIO(img_response.content)
                image_blobs.append(img_blob.read())  # 以二进制格式存储图片
            except Exception as e:
                print(f"⚠️ Failed to download image: {img_url}, Error: {e}")

    # 提取评论（可能存在于 <span> 或 <p> 标签中）
    comments = []
    for comment in soup.find_all("span"):
        text = comment.get_text().strip()
        if text:
            comments.append(text)

    # 组织 JSON 数据
    output_data = {
        "blobs": image_blobs,
        "comments": comments
    }

    return output_data

# 运行爬虫
if __name__ == "__main__":
    insta_url = input("🔗 请输入 Instagram 帖子链接: ")  # 让用户输入帖子 URL
    data = fetch_instagram_data(insta_url)

    # 保存 JSON 数据
    if data:
        with open("instagram_data.json", "w") as f:
            json.dump({"blobs": [blob.hex() for blob in data["blobs"]], "comments": data["comments"]}, f)
        print("✅ Data saved successfully to instagram_data.json")
    else:
        print("❌ No data fetched.")
