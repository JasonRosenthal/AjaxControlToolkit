﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.WebPages;
using System.Web.WebPages.Instrumentation;

namespace AjaxControlToolkit.Reference.Core.Razor {

    public abstract class TemplateBase {
        string _cachedLayout;
        LayoutTemplateBase _cachedLayoutInstance;

        protected StringBuilder Buffer { get; private set; }
        public string Layout { get; set; }
        public string RootDir { get; set; }

        public TemplateBase() {
            Buffer = new StringBuilder();
        }

        public void Write(object value) {
            WriteLiteral(value);
        }

        public void WriteLiteral(object value) {
            Buffer.Append(value);
        }

        public virtual void WriteAttribute(string name, PositionTagged<string> prefix, PositionTagged<string> suffix, params AttributeValue[] values) {
            Buffer.Append(prefix.Value);
            foreach(var val in values.OrderBy(v => v.Value.Position))
                Buffer.Append(val.Value.Value);

            Buffer.Append(suffix.Value);
        }

        protected string Render() {
            Buffer.Clear();
            Execute();

            if(String.IsNullOrWhiteSpace(Layout))
                return Buffer.ToString();

            if(_cachedLayoutInstance == null || Layout != _cachedLayout) {
                var engine = new Engine(RootDir);
                _cachedLayoutInstance = engine.CreateLayoutInstance(Layout);
                _cachedLayout = Layout;
            }

            return _cachedLayoutInstance.Render(Buffer.ToString());
        }

        public abstract void Execute();
    }

}