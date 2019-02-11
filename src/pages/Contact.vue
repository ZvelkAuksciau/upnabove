<template>
  <Layout>
    <div class="container">
      <Hero>
        <template slot="title">{{ $page.data.heroTitle }}</template>
        <template slot="subtitle">{{ $page.data.heroSubtitle }}</template>
      </Hero>

      <ContactForm/>

      <ClientOnly>
        <GmapMap
          :center="{lat:54.6547269, lng:25.106417}"
          :zoom="11"
          map-type-id="terrain"
          style="height: 400px"
          :options="{styles: mapStyle, mapTypeControl: false, streetViewControl: false, fullscreenControl: false}"
        >
          <GmapMarker :position="{lat:54.6547269, lng:25.106417}" :clickable="true" @click="openMaps"/>
        </GmapMap>
      </ClientOnly>
    </div>
  </Layout>
</template>

<page-query>
{
  data(path:"/data/contact-page") {
    heroTitle
    heroSubtitle
  }
}
</page-query>

<script>
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export default {
  metaInfo() {
    return {
      title: "Contact"
    };
  },
  components: {
    Hero,
    ContactForm
  },
  data() {
    return {
      mapStyle: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#333333"
            },
            {
              lightness: 40
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        }
      ]
    };
  },
  methods: {
    openMaps() {
      window.location.href = "https://www.google.com/maps/search/?api=1&query=Kirtimų+g.+33,+Vilnius+02300"
    }
  }
};
</script>

<style scoped>
</style>

