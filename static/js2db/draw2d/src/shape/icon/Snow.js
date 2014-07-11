/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.shape.icon.Snow

 * See the example:
 *
 *     @example preview small frame
 *     
 *     var icon =  new draw2d.shape.icon.Snow();
 *     icon.setDimension(50,50);
 *     canvas.addFigure(icon,50,10);
 *     
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.icon.Icon
 */
draw2d.shape.icon.Snow = draw2d.shape.icon.Icon.extend({
    NAME : "draw2d.shape.icon.Snow",

    /**
     * 
     * @constructor
     * Creates a new icon element which are not assigned to any canvas.
     * @param {Number} [width] the width of the Oval
     * @param {Number} [height] the height of the Oval
     */
    init: function(width, height) {
      this._super(width, height);
    },

    /**
     * @private
     * @returns
     */
    createSet : function() {
        return this.canvas.paper.path("M25.372,6.912c-0.093-3.925-3.302-7.078-7.248-7.08c-2.638,0.002-4.942,1.412-6.208,3.518c-0.595-0.327-1.28-0.518-2.01-0.518C7.627,2.834,5.773,4.639,5.69,6.898c-2.393,0.786-4.125,3.025-4.127,5.686c0,3.312,2.687,6,6,6v-0.002h15.875c3.312,0,6-2.688,6-6C29.434,9.944,27.732,7.715,25.372,6.912zM23.436,16.584H7.562c-2.209-0.006-3.997-1.793-4.001-4c-0.002-1.983,1.45-3.619,3.35-3.933c0.265-0.043,0.502-0.19,0.657-0.414C7.723,8.015,7.78,7.74,7.731,7.475C7.703,7.326,7.686,7.187,7.686,7.051c0.004-1.225,0.995-2.217,2.22-2.219c0.647,0,1.217,0.278,1.633,0.731c0.233,0.257,0.587,0.375,0.927,0.31c0.342-0.066,0.626-0.308,0.748-0.631c0.749-1.992,2.662-3.412,4.911-3.41c2.898,0.004,5.244,2.351,5.251,5.25c0,0.16-0.009,0.325-0.026,0.496c-0.05,0.518,0.305,0.984,0.814,1.079c1.859,0.345,3.273,1.966,3.271,3.923C27.43,14.791,25.645,16.578,23.436,16.584zM16.667,24.09l1.119-1.119c0.389-0.391,0.389-1.025,0-1.416c-0.392-0.391-1.025-0.391-1.415,0l-1.119,1.119l-1.119-1.119c-0.391-0.391-1.025-0.391-1.415,0c-0.391,0.391-0.391,1.025,0,1.416l1.118,1.117l-1.12,1.121c-0.389,0.393-0.389,1.021,0,1.414c0.195,0.188,0.451,0.293,0.707,0.293c0.256,0,0.512-0.104,0.708-0.293l1.12-1.119l1.12,1.119c0.195,0.188,0.451,0.293,0.708,0.293c0.256,0,0.512-0.104,0.707-0.293c0.391-0.396,0.391-1.021,0-1.414L16.667,24.09zM25.119,21.817c-0.393-0.392-1.025-0.392-1.415,0l-1.12,1.121l-1.12-1.121c-0.391-0.392-1.022-0.392-1.414,0c-0.39,0.392-0.39,1.022,0,1.416l1.119,1.119l-1.119,1.119c-0.39,0.391-0.39,1.022,0,1.413c0.195,0.195,0.451,0.294,0.707,0.294c0.257,0,0.513-0.099,0.707-0.294l1.12-1.118l1.12,1.118c0.194,0.195,0.45,0.294,0.707,0.294c0.256,0,0.513-0.099,0.708-0.294c0.389-0.391,0.389-1.022,0-1.413l-1.12-1.119l1.12-1.119C25.507,22.842,25.507,22.209,25.119,21.817zM9.334,23.953l1.119-1.119c0.389-0.394,0.389-1.021,0-1.414c-0.391-0.394-1.025-0.394-1.415,0l-1.119,1.119l-1.12-1.121c-0.391-0.39-1.023-0.39-1.415,0c-0.391,0.396-0.391,1.024,0,1.418l1.119,1.117l-1.12,1.118c-0.391,0.394-0.391,1.025,0,1.414c0.196,0.195,0.452,0.293,0.708,0.293c0.256,0,0.511-0.098,0.707-0.293l1.12-1.119l1.121,1.121c0.195,0.195,0.451,0.293,0.707,0.293s0.513-0.098,0.708-0.293c0.389-0.391,0.389-1.022,0-1.416L9.334,23.953z");
    }
});