<style>
    @media only screen and (max-width: 768px) {
        .grid_column {
            width: 100% !important;
            float: none !important;
        }
        .title {
            font-size: 30px !important;
        }
        .subtitle {
            font-size: 17px !important;
        }
        .layout_width {
            width: 100% !important;
        }
        .banner_content {
            font-size: 15px !important;
        }
        .banner_title {
            font-size: 25px !important;
        }
        .bg-container {
            height: 550px !important;
        }
        }
        .bg-container {
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            overflow: hidden;
            transition: all 0.5s;
            z-index: -1;
        }

        .banner_content p {
            margin-bottom: 0.5rem;
        }

        .layout_width {
            width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .hidden_test {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .grid_column {
            width: 33.33%;
            /* border: 5px solid black; */
            display: flex;
            flex-wrap: wrap;
            float: left;
            padding: 20px;
        }

        .banner_title {
            font-size: 50px;
            font-weight: 400;
            padding: 5px;
        }

        .banner_content {
            font-size: 25px;
            font-weight: 500;
            padding: 40px 0px 40px 0px;
            margin: 0px;
        }

        .bg-container1 {
            width: 100%;
            height: auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            overflow: hidden;
            transition: all 0.5s;
            z-index: -1;
        }

        .post-card__title {
            margin-top: 20px;
            text-align: center;
        }

        body, h1, h2, h3, h4, p, span, button, a {
            font-family: "Questrial" !important;
        }

        body {
            background-color: white;
            font-weight: 400;
        }

        .text-white {
            color: white;
        }

        .text-blue-700 {
            color: #17718c;
        }

        .learn-more {
            background-color: #17718c;
            border: 1px solid #17718c;
            border-radius: 5px;
            padding: 10px;
            color: white;
            font-size: 20px;
        }

        .text.center {
            text-align: center;
        }

        .title {
            font-size: 100px;
            letter-spacing: 0px;
            font-weight: 400;
            padding-top: 40px;
        }

        .subtitle {
            font-size: 32px;
            letter-spacing: 0px;
            color: #76f5ff;
            font-weight: 400;
            margin: 0px;
        }

        a {
            color: black !important;
            text-decoration: none;
        }

        .grid_section {
            padding: 30px 0px 30px 0px;
        }
</style>
<template>
    <div>

        <div class="main_section">
            <div class="bg-container" :style="{
                backgroundImage: `url(${$page.home.bannerHero.bgImage})`,
              }"></div>
            <div class="p-6 max-w-xl w-full h-full text-center">
                <h1 class="title" :class="$page.home.bannerHero.titleColor || 'text-yellow1'">{{ $page.home.bannerHero.title }}</h1>
                <h2 class="subtitle" :class="$page.home.bannerHero.subTitleColor || 'text-white'">
                    {{ $page.home.bannerHero.subTitle }}
                </h2>
                <div style=" padding-top: 200px; padding-bottom: 200px;">
                    <a :href="$page.home.bannerHero.url">
                        <button class="learn-more">
                            {{ $page.home.bannerHero.learnMore }}
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div class="main_section">
            <h1 class="banner_title text-center" :class="$page.home.bannerSection.titleColor || 'text-yellow1'">
                {{ $page.home.bannerSection.title }}
            </h1>
            <div class="bg-container1" :style="{
                backgroundImage: `url(${$page.home.bannerSection.bnImage})`,
              }">
                <div class="p-6 max-w-xl w-full h-full layout_width text-center">
                    <h2 class="text-white  text-center banner_content hidden_test" v-html="$page.home.bannerSection.body" />
                </div>
            </div>
        </div>
        <div class="grid_section layout_width">
            <div class="grid_column flex-col md:flex-row flex-wrap max-w-1200 mx-auto" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node.post">

                <div class="flex flex-col md:flex-row flex-wrap max-w-1200 mx-auto">
                    <div class="post-card__header">
                        <g-link class="post-card__link" :to="edge.node.path"><g-image alt="Cover image" v-if="edge.node.cover_image" class="post-card__image" :src="edge.node.cover_image" /> </g-link>
                    </div>
                    <div class="post-card__content">
                        <g-link class="post-card__link" :to="edge.node.path">
                            <h2 class="post-card__title" v-html="edge.node.title" />
                            <p class="post-card__description hidden_test" v-html="edge.node.description" />
                        </g-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<page-query>
    query Page{
    home: pages(path: "/content/pages/home") {
    bannerHero {
    title
    titleColor
    subTitle
    subTitleColor
    url
    learnMore
    bgImage
    }
    bannerSection {
    title
    titleColor
    body
    bnImage
    }
    }
    posts: allPost(filter: { published: { eq: true }},sortBy: "date", order: ASC) {
    edges {
    node {
    id
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    cover_image (width: 770, height: 380, blur: 10)
    ...on Post {
    id
    title
    path
    }
    path
    }
    }
    }
    }
</page-query>
