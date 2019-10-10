<template>
  <div>
    <v-app-bar app clipped-left color="white" light elevation="1">
      <v-toolbar-title><img src="/images/triple-s-vida-logo.png" alt="" style="height:32px"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn depressed text color="primary" dark v-on="on" >
              Michael Joseph Jackson  <v-icon class="ml-3">keyboard_arrow_down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="">
              <v-list-item-title>Test </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn icon depressed text color="error">
          <v-icon>mdi-power</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer app clipped permanent dark src="../images/nav-bg.jpg" style="">
      <div class="text-center">
        <img src="/images/sss-logo.png" alt="" class="pt-3" style="height:100px;">
      </div>  
      <v-list dense>
        <v-list-item to="/home">
          <v-list-item-action> 
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>DASHBOARD</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/polizas">
          <v-list-item-action>
            <v-icon>mdi-file-document-box-multiple-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>POLIZAS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group prepend-icon="credit_card" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>PAGOS</v-list-item-title>
            </v-list-item-content>
          </template>
  
          <v-list-item @click="">
            <v-list-item-content>
              <v-list-item-title>SUB MENU</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="mdi-cogs" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>SERVICIOS</v-list-item-title>
            </v-list-item-content>
          </template>
  
          <v-list-item @click="">
            <v-list-item-content>
              <v-list-item-title>SUB MENU</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="mdi-ticket" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>RECLAMACIONES</v-list-item-title>
            </v-list-item-content>
          </template>
  
          <v-list-item @click="">
            <v-list-item-content>
              <v-list-item-title>SUB MENU</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-mailbox</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>CORRESPONDENCIA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: false,
      }
    },
  }
</script>

