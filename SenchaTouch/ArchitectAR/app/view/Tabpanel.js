/*
 * File: app/view/Tabpanel.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AR.view.Tabpanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.artabpanel',

    requires: [
        'AR.view.article.List',
        'AR.view.category.IconView',
        'AR.view.author.IconView',
        'AR.view.override.Tabpanel',
        'AR.store.ArticleStore'
    ],

    config: {
        itemId: 'mytabpanel',
        items: [
            {
                xtype: 'articlelist',
                itemId: 'home',
                disableSelection: true,
                title: 'All Articles',
                iconCls: 'articles'
            },
            {
                xtype: 'categoryIconView',
                itemId: 'categories',
                title: 'By Categeories',
                iconCls: 'category'
            },
            {
                xtype: 'authorIconView',
                itemId: 'authors',
                title: 'By Authors',
                iconCls: 'users'
            },
            {
                xtype: 'articlelist',
                itemId: 'myarticles',
                disableSelection: true,
                store: 'articleLocalStore',
                title: 'Saved Articles',
                iconCls: 'save'
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});